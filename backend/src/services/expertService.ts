import prisma from '../config/database.js';
import { errors } from '../middleware/errorHandler.js';

// Type alias from Prisma schema
type ExpertStatus = 'DRAFT' | 'REVIEW' | 'ACTIVE' | 'DEPRECATED' | 'RETIRED';

export interface CreateExpertInput {
    name: string;
    scope: {
        domain: string;
        subdomains: string[];
        inputTypes: string[];
        outputTypes: string[];
        limitations: string[];
    };
    permissions?: {
        invokeRoles: string[];
        editRoles: string[];
        approveRoles: string[];
        viewRoles: string[];
    };
    logicDefinition: Record<string, unknown>;
    changeReason: string;
}

export interface UpdateExpertInput {
    scope?: CreateExpertInput['scope'];
    permissions?: CreateExpertInput['permissions'];
    logicDefinition?: Record<string, unknown>;
    changeReason: string;
}

/**
 * Expert Service - manages expert lifecycle
 */
export const expertService = {
    /**
     * Create a new expert with initial version
     */
    async create(userId: string, input: CreateExpertInput) {
        // Generate slug from name
        const slug = this.generateSlug(input.scope.domain, Date.now().toString());

        // Default permissions
        const defaultPermissions = input.permissions || {
            invokeRoles: ['USER', 'REVIEWER', 'MODERATOR', 'ADMIN'],
            editRoles: ['MODERATOR', 'ADMIN'],
            approveRoles: ['ADMIN'],
            viewRoles: ['USER', 'REVIEWER', 'MODERATOR', 'ADMIN'],
        };

        // Create expert (without transaction for standalone MongoDB compatibility)
        const newExpert = await prisma.expert.create({
            data: {
                slug,
                status: 'DRAFT',
                createdById: userId,
            },
        });

        // Create initial version
        const version = await prisma.expertVersion.create({
            data: {
                expertId: newExpert.id,
                versionNumber: 1,
                scope: input.scope as any,
                permissions: defaultPermissions as any,
                logicDefinition: input.logicDefinition as any,
                changeReason: input.changeReason,
                createdById: userId,
            },
        });

        // Update expert with current version using raw command
        try {
            await prisma.$runCommandRaw({
                update: 'Expert',
                updates: [
                    {
                        q: { _id: { $oid: newExpert.id } },
                        u: { $set: { currentVersionId: version.id } },
                    },
                ],
            });
        } catch (err) {
            console.warn('Failed to update currentVersionId:', err);
        }

        // Fetch the complete expert
        const expert = await prisma.expert.findFirst({
            where: { id: newExpert.id },
            include: {
                versions: {
                    orderBy: { versionNumber: 'desc' },
                    take: 1,
                },
                createdBy: {
                    select: { id: true, displayName: true },
                },
            },
        });

        return this.formatExpert(expert!);
    },

    /**
     * Get expert by ID
     */
    async getById(id: string) {
        const expert = await prisma.expert.findFirst({
            where: { id },
            include: {
                versions: {
                    orderBy: { versionNumber: 'desc' },
                    take: 10,
                    include: {
                        createdBy: {
                            select: { id: true, displayName: true },
                        },
                    },
                },
                createdBy: {
                    select: { id: true, displayName: true },
                },
                dependencies: {
                    include: {
                        requiredExpert: {
                            include: {
                                versions: {
                                    orderBy: { versionNumber: 'desc' },
                                    take: 1,
                                },
                            },
                        },
                    },
                },
                debates: {
                    where: { status: { in: ['OPEN', 'VOTING'] } },
                    take: 5,
                    orderBy: { createdAt: 'desc' },
                },
            },
        });

        if (!expert) {
            throw errors.notFound('Expert');
        }

        return this.formatExpert(expert);
    },

    /**
     * Get expert by slug
     */
    async getBySlug(slug: string) {
        const expert = await prisma.expert.findFirst({
            where: { slug },
            include: {
                versions: {
                    orderBy: { versionNumber: 'desc' },
                    take: 10,
                    include: {
                        createdBy: {
                            select: { id: true, displayName: true },
                        },
                    },
                },
                createdBy: {
                    select: { id: true, displayName: true },
                },
            },
        });

        if (!expert) {
            throw errors.notFound('Expert');
        }

        return this.formatExpert(expert);
    },

    /**
     * List experts with pagination and filtering
     */
    async list(options: {
        page?: number;
        limit?: number;
        status?: ExpertStatus;
        domain?: string;
        search?: string;
    }) {
        const page = options.page || 1;
        const limit = Math.min(options.limit || 20, 100);
        const skip = (page - 1) * limit;

        const where: { status?: ExpertStatus } = {};

        if (options.status) {
            where.status = options.status;
        }

        // Count total
        const total = await prisma.expert.count({ where });

        // Get experts
        const experts = await prisma.expert.findMany({
            where,
            skip,
            take: limit,
            orderBy: { updatedAt: 'desc' },
            include: {
                versions: {
                    orderBy: { versionNumber: 'desc' },
                    take: 1,
                },
                createdBy: {
                    select: { id: true, displayName: true },
                },
                _count: {
                    select: { debates: true },
                },
            },
        });

        return {
            data: experts.map((e: Record<string, unknown>) => this.formatExpert(e)),
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        };
    },

    /**
     * Create a new version of an expert
     */
    async createVersion(userId: string, expertId: string, input: UpdateExpertInput) {
        const expert = await prisma.expert.findFirst({
            where: { id: expertId },
            include: {
                versions: {
                    orderBy: { versionNumber: 'desc' },
                    take: 1,
                },
            },
        });

        if (!expert) {
            throw errors.notFound('Expert');
        }

        const currentVersion = expert.versions[0];
        if (!currentVersion) {
            throw errors.internal('Expert has no versions');
        }

        const newVersionNumber = currentVersion.versionNumber + 1;

        // Create new version (without transaction)
        const newVersion = await prisma.expertVersion.create({
            data: {
                expertId,
                versionNumber: newVersionNumber,
                scope: (input.scope || currentVersion.scope) as any,
                permissions: (input.permissions || currentVersion.permissions) as any,
                logicDefinition: (input.logicDefinition || currentVersion.logicDefinition) as any,
                changeReason: input.changeReason,
                createdById: userId,
            },
            include: {
                createdBy: {
                    select: { id: true, displayName: true },
                },
            },
        });

        // Update expert's updated timestamp and currentVersionId
        // Using runCommandRaw for updates if needed, but here simple update might fail if inside tx.
        // But we are not inside tx here. Wait, plain .update() works on standalone?
        // Yes, plain .update() works for single document updates on standalone.
        // It failed earlier in authService because it was potentially checking or doing something else? 
        // No, the error in authService was "Invalid `prisma.user.update()` invocation... Transaction failed".
        // Wait, why would simple update fail? 
        // "Prisma Client does not support the update method for MongoDB when not using a replica set if the query implies a transaction."
        // Queries that *might* imply transactions are nested writes. 
        // The authService update was `{ data: { lastLoginAt: new Date() } }`. That is simple.
        // Maybe it's safely to use runCommandRaw or findFirst + update (but update requires ID).
        // Actually, for simple updates by ID, `update` SHOULD work. 
        // But if it fails, I'll use runCommandRaw. 
        // Let's try to use `update` but catch error? No this is persistent logic.
        // Safe bet: use runCommandRaw for updates to avoid "Transaction failed" error on standalone.

        try {
            await prisma.$runCommandRaw({
                update: 'Expert',
                updates: [
                    {
                        q: { _id: { $oid: expertId } },
                        u: {
                            $set: {
                                updatedAt: new Date(),
                                currentVersionId: { $oid: newVersion.id }
                            }
                        },
                    },
                ],
            });
        } catch (e) {
            console.warn('Failed to update expert timestamp:', e);
        }



        return newVersion;
    },

    /**
     * Update expert status
     */
    async updateStatus(expertId: string, status: ExpertStatus) {
        const expert = await prisma.expert.update({
            where: { id: expertId },
            data: { status },
            include: {
                versions: {
                    orderBy: { versionNumber: 'desc' },
                    take: 1,
                },
            },
        });

        return this.formatExpert(expert);
    },

    /**
     * Get version history
     */
    async getVersionHistory(expertId: string, page = 1, limit = 20) {
        const skip = (page - 1) * limit;

        const [total, versions] = await Promise.all([
            prisma.expertVersion.count({ where: { expertId } }),
            prisma.expertVersion.findMany({
                where: { expertId },
                skip,
                take: limit,
                orderBy: { versionNumber: 'desc' },
                include: {
                    createdBy: {
                        select: { id: true, displayName: true },
                    },
                },
            }),
        ]);

        return {
            data: versions,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        };
    },

    /**
     * Helper: Generate URL-safe slug
     */
    generateSlug(domain: string, suffix: string): string {
        return `${domain.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${suffix}`;
    },

    /**
     * Helper: Format expert for API response
     */
    formatExpert(expert: Record<string, unknown>) {
        const versions = expert.versions as Array<Record<string, unknown>> | undefined;
        const currentVersion = versions?.[0];
        const countData = expert._count as { debates?: number } | undefined;
        const dependencies = expert.dependencies as Array<Record<string, unknown>> | undefined;

        return {
            id: expert.id,
            slug: expert.slug,
            status: expert.status,
            currentVersion: currentVersion ? {
                number: currentVersion.versionNumber,
                scope: currentVersion.scope,
                permissions: currentVersion.permissions,
                accuracyScore: currentVersion.accuracyScore,
                usageCount: currentVersion.usageCount,
                lastInvokedAt: currentVersion.lastInvokedAt,
                changeReason: currentVersion.changeReason,
                createdBy: currentVersion.createdBy,
                createdAt: currentVersion.createdAt,
            } : null,
            versions: versions?.map((v: Record<string, unknown>) => ({
                number: v.versionNumber,
                changeReason: v.changeReason,
                createdBy: v.createdBy,
                createdAt: v.createdAt,
            })),
            dependencies: dependencies?.map((d: Record<string, unknown>) => {
                const requiredExpert = d.requiredExpert as Record<string, unknown>;
                const reqVersions = requiredExpert?.versions as Array<Record<string, unknown>> | undefined;
                return {
                    id: requiredExpert?.id,
                    slug: requiredExpert?.slug,
                    version: reqVersions?.[0]?.versionNumber,
                    type: d.dependencyType,
                };
            }),
            debates: expert.debates,
            debateCount: countData?.debates,
            createdBy: expert.createdBy,
            createdAt: expert.createdAt,
            updatedAt: expert.updatedAt,
        };
    },
};
