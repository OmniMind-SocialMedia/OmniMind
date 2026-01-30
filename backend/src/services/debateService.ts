import prisma from '../config/database.js';
import { errors } from '../middleware/errorHandler.js';

// Type aliases from Prisma schema
type DebateStatus = 'OPEN' | 'VOTING' | 'RESOLVED' | 'STALE' | 'CLOSED';
type ArgumentType = 'CLAIM' | 'SUPPORT' | 'COUNTER' | 'QUESTION' | 'SYNTHESIS';
type EvidenceType = 'CITATION' | 'DATA' | 'EXPERT_OUTPUT' | 'EXTERNAL_LINK';

export interface CreateDebateInput {
    expertId: string;
    topic: string;
    description?: string;
    resolutionCriteria: string;
}

export interface CreateArgumentInput {
    debateId: string;
    parentArgumentId?: string;
    type: ArgumentType;
    claim: string;
    reasoning: string;
    evidence?: Array<{
        type: EvidenceType;
        content: string;
        sourceUrl?: string;
    }>;
}

/**
 * Debate Service - manages debates and arguments
 */
export const debateService = {
    /**
     * Create a new debate
     */
    async create(userId: string, input: CreateDebateInput) {
        // Verify expert exists
        const expert = await prisma.expert.findUnique({
            where: { id: input.expertId },
        });

        if (!expert) {
            throw errors.notFound('Expert');
        }

        const debate = await prisma.debate.create({
            data: {
                expertId: input.expertId,
                topic: input.topic,
                description: input.description,
                resolutionCriteria: input.resolutionCriteria,
                status: 'OPEN',
                createdById: userId,
            },
            include: {
                expert: {
                    include: {
                        versions: {
                            orderBy: { versionNumber: 'desc' },
                            take: 1,
                        },
                    },
                },
                createdBy: {
                    select: { id: true, displayName: true },
                },
                _count: {
                    select: { arguments: true },
                },
            },
        });

        return this.formatDebate(debate);
    },

    /**
     * Get debate by ID with arguments
     */
    async getById(id: string) {
        const debate = await prisma.debate.findUnique({
            where: { id },
            include: {
                expert: {
                    include: {
                        versions: {
                            orderBy: { versionNumber: 'desc' },
                            take: 1,
                        },
                    },
                },
                createdBy: {
                    select: { id: true, displayName: true },
                },
                arguments: {
                    where: { parentArgumentId: null }, // Top-level arguments only
                    orderBy: { createdAt: 'asc' },
                    include: {
                        createdBy: {
                            select: { id: true, displayName: true },
                        },
                        evidence: true,
                        childArguments: {
                            orderBy: { createdAt: 'asc' },
                            include: {
                                createdBy: {
                                    select: { id: true, displayName: true },
                                },
                                evidence: true,
                                childArguments: {
                                    orderBy: { createdAt: 'asc' },
                                    include: {
                                        createdBy: {
                                            select: { id: true, displayName: true },
                                        },
                                        evidence: true,
                                    },
                                },
                            },
                        },
                    },
                },
                _count: {
                    select: { arguments: true },
                },
            },
        });

        if (!debate) {
            throw errors.notFound('Debate');
        }

        return this.formatDebate(debate);
    },

    /**
     * List debates with pagination
     */
    async list(options: {
        page?: number;
        limit?: number;
        status?: DebateStatus;
        expertId?: string;
    }) {
        const page = options.page || 1;
        const limit = Math.min(options.limit || 20, 100);
        const skip = (page - 1) * limit;

        const where: { status?: DebateStatus; expertId?: string } = {};

        if (options.status) {
            where.status = options.status;
        }
        if (options.expertId) {
            where.expertId = options.expertId;
        }

        const [total, debates] = await Promise.all([
            prisma.debate.count({ where }),
            prisma.debate.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
                include: {
                    expert: {
                        include: {
                            versions: {
                                orderBy: { versionNumber: 'desc' },
                                take: 1,
                            },
                        },
                    },
                    createdBy: {
                        select: { id: true, displayName: true },
                    },
                    _count: {
                        select: { arguments: true },
                    },
                },
            }),
        ]);

        return {
            data: debates.map((d: Record<string, unknown>) => this.formatDebate(d)),
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        };
    },

    /**
     * Add an argument to a debate
     */
    async addArgument(userId: string, input: CreateArgumentInput) {
        // Verify debate exists and is open
        const debate = await prisma.debate.findUnique({
            where: { id: input.debateId },
        });

        if (!debate) {
            throw errors.notFound('Debate');
        }

        if (debate.status !== 'OPEN' && debate.status !== 'VOTING') {
            throw errors.badRequest('Debate is not accepting new arguments');
        }

        // If parent argument specified, verify it exists
        if (input.parentArgumentId) {
            const parent = await prisma.argument.findUnique({
                where: { id: input.parentArgumentId },
            });

            if (!parent || parent.debateId !== input.debateId) {
                throw errors.badRequest('Invalid parent argument');
            }
        }

        // Get user's current reputation
        const reputationScores = await prisma.reputationScore.findMany({
            where: { userId },
        });
        const totalReputation = reputationScores.reduce((sum: number, r: { score: number }) => sum + r.score, 0);

        // Create argument with evidence in transaction
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const argument = await prisma.$transaction(async (tx: any) => {
            const newArgument = await tx.argument.create({
                data: {
                    debateId: input.debateId,
                    parentArgumentId: input.parentArgumentId,
                    type: input.type,
                    claim: input.claim,
                    reasoning: input.reasoning,
                    authorReputationAtTime: totalReputation,
                    createdById: userId,
                },
            });

            // Add evidence if provided
            if (input.evidence && input.evidence.length > 0) {
                await tx.evidence.createMany({
                    data: input.evidence.map((e) => ({
                        argumentId: newArgument.id,
                        type: e.type,
                        content: e.content,
                        sourceUrl: e.sourceUrl,
                    })),
                });
            }

            // Return with relations
            return tx.argument.findUnique({
                where: { id: newArgument.id },
                include: {
                    createdBy: {
                        select: { id: true, displayName: true },
                    },
                    evidence: true,
                },
            });
        });

        return argument;
    },

    /**
     * Update debate status
     */
    async updateStatus(debateId: string, status: DebateStatus, outcome?: Record<string, unknown>) {
        // Build update data
        const updateData: Record<string, unknown> = { status };

        if (status === 'RESOLVED' && outcome) {
            updateData.resolvedAt = new Date();
            updateData.outcome = outcome;
        }

        const debate = await prisma.debate.update({
            where: { id: debateId },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data: updateData as any,
            include: {
                expert: {
                    include: {
                        versions: {
                            orderBy: { versionNumber: 'desc' },
                            take: 1,
                        },
                    },
                },
                createdBy: {
                    select: { id: true, displayName: true },
                },
                _count: {
                    select: { arguments: true },
                },
            },
        });

        return this.formatDebate(debate);
    },

    /**
     * Get debate statistics
     */
    async getStats(debateId: string) {
        const [argumentCounts, participantCount] = await Promise.all([
            prisma.argument.groupBy({
                by: ['type'],
                where: { debateId },
                _count: true,
            }),
            prisma.argument.findMany({
                where: { debateId },
                select: { createdById: true },
                distinct: ['createdById'],
            }),
        ]);

        return {
            totalArguments: argumentCounts.reduce((sum: number, c: { _count: number }) => sum + c._count, 0),
            byType: Object.fromEntries(argumentCounts.map((c: { type: string; _count: number }) => [c.type, c._count])),
            participantCount: participantCount.length,
        };
    },

    /**
     * Helper: Format debate for API response
     */
    formatDebate(debate: Record<string, unknown>) {
        const expertData = debate.expert as Record<string, unknown> | undefined;
        const versions = expertData?.versions as Array<Record<string, unknown>> | undefined;
        const expertVersion = versions?.[0];
        const countData = debate._count as { arguments?: number } | undefined;

        return {
            id: debate.id,
            topic: debate.topic,
            description: debate.description,
            status: debate.status,
            resolutionCriteria: debate.resolutionCriteria,
            outcome: debate.outcome,
            expert: expertData ? {
                id: expertData.id,
                slug: expertData.slug,
                version: expertVersion?.versionNumber,
                scope: expertVersion?.scope,
            } : null,
            createdBy: debate.createdBy,
            arguments: debate.arguments,
            argumentCount: countData?.arguments,
            createdAt: debate.createdAt,
            updatedAt: debate.updatedAt,
            resolvedAt: debate.resolvedAt,
        };
    },
};
