import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { expertService } from '../services/expertService.js';
import { authenticate, requireRole, AuthenticatedRequest } from '../middleware/auth.js';
import { asyncHandler } from '../middleware/errorHandler.js';
import { createAuditEvent } from '../middleware/audit.js';

const router = Router();

// Validation schemas
const createExpertSchema = z.object({
    name: z.string().min(2).max(200),
    scope: z.object({
        domain: z.string().min(1),
        subdomains: z.array(z.string()),
        inputTypes: z.array(z.string()),
        outputTypes: z.array(z.string()),
        limitations: z.array(z.string()),
    }),
    permissions: z.object({
        invokeRoles: z.array(z.string()),
        editRoles: z.array(z.string()),
        approveRoles: z.array(z.string()),
        viewRoles: z.array(z.string()),
    }).optional(),
    logicDefinition: z.record(z.string(), z.unknown()),
    changeReason: z.string().min(10, 'Change reason must explain the purpose'),
});

const updateExpertSchema = z.object({
    scope: createExpertSchema.shape.scope.optional(),
    permissions: createExpertSchema.shape.permissions.optional(),
    logicDefinition: z.record(z.string(), z.unknown()).optional(),
    changeReason: z.string().min(10, 'Change reason must explain the purpose'),
});

const listQuerySchema = z.object({
    page: z.coerce.number().min(1).default(1),
    limit: z.coerce.number().min(1).max(100).default(20),
    status: z.enum(['DRAFT', 'REVIEW', 'ACTIVE', 'DEPRECATED', 'RETIRED']).optional(),
    domain: z.string().optional(),
    search: z.string().optional(),
});

/**
 * GET /api/experts
 * List all experts with pagination
 */
router.get(
    '/',
    asyncHandler(async (req: Request, res: Response) => {
        const query = listQuerySchema.parse(req.query);
        const result = await expertService.list(query);

        res.json({
            success: true,
            ...result,
        });
    })
);

/**
 * GET /api/experts/:id
 * Get expert by ID
 */
router.get(
    '/:id',
    asyncHandler(async (req: Request, res: Response) => {
        const id = req.params.id as string;
        const expert = await expertService.getById(id);

        res.json({
            success: true,
            data: expert,
        });
    })
);

/**
 * GET /api/experts/slug/:slug
 * Get expert by slug
 */
router.get(
    '/slug/:slug',
    asyncHandler(async (req: Request, res: Response) => {
        const slug = req.params.slug as string;
        const expert = await expertService.getBySlug(slug);

        res.json({
            success: true,
            data: expert,
        });
    })
);

/**
 * POST /api/experts
 * Create a new expert (requires authentication)
 */
router.post(
    '/',
    authenticate,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
        const input = createExpertSchema.parse(req.body);

        const expert = await expertService.create(req.user!.id, input);

        await createAuditEvent(req, {
            action: 'EXPERT_CREATED',
            resourceType: 'Expert',
            resourceId: expert.id as string,
            newState: { name: input.name, domain: input.scope.domain },
        });

        res.status(201).json({
            success: true,
            data: expert,
        });
    })
);

/**
 * POST /api/experts/:id/versions
 * Create a new version of an expert
 */
router.post(
    '/:id/versions',
    authenticate,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
        const input = updateExpertSchema.parse(req.body);
        const id = req.params.id as string;

        // Get current state for audit
        const currentExpert = await expertService.getById(id);

        const version = await expertService.createVersion(
            req.user!.id,
            id,
            input
        );

        const versionData = version as unknown as Record<string, unknown>;

        await createAuditEvent(req, {
            action: 'EXPERT_VERSION_CREATED',
            resourceType: 'Expert',
            resourceId: id,
            previousState: { version: currentExpert.currentVersion?.number },
            newState: { version: versionData.versionNumber, reason: input.changeReason },
        });

        res.status(201).json({
            success: true,
            data: version,
        });
    })
);

/**
 * GET /api/experts/:id/versions
 * Get version history for an expert
 */
router.get(
    '/:id/versions',
    asyncHandler(async (req: Request, res: Response) => {
        const id = req.params.id as string;
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 20;

        const result = await expertService.getVersionHistory(id, page, limit);

        res.json({
            success: true,
            ...result,
        });
    })
);

/**
 * PATCH /api/experts/:id/status
 * Update expert status (requires moderator role)
 */
router.patch(
    '/:id/status',
    authenticate,
    requireRole('MODERATOR', 'ADMIN', 'SUPER_ADMIN'),
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
        const { status } = z.object({
            status: z.enum(['DRAFT', 'REVIEW', 'ACTIVE', 'DEPRECATED', 'RETIRED']),
        }).parse(req.body);

        const id = req.params.id as string;
        const currentExpert = await expertService.getById(id);

        const expert = await expertService.updateStatus(id, status);

        await createAuditEvent(req, {
            action: 'EXPERT_STATUS_CHANGED',
            resourceType: 'Expert',
            resourceId: id,
            previousState: { status: currentExpert.status },
            newState: { status },
        });

        res.json({
            success: true,
            data: expert,
        });
    })
);

export default router;
