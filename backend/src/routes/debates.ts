import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { debateService } from '../services/debateService.js';
import { authenticate, requireRole, AuthenticatedRequest } from '../middleware/auth.js';
import { asyncHandler } from '../middleware/errorHandler.js';
import { createAuditEvent } from '../middleware/audit.js';

const router = Router();

// Validation schemas
const createDebateSchema = z.object({
    expertId: z.string().uuid(),
    topic: z.string().min(10, 'Topic must be at least 10 characters').max(500),
    description: z.string().max(2000).optional(),
    resolutionCriteria: z.string().min(10, 'Resolution criteria required'),
});

const createArgumentSchema = z.object({
    parentArgumentId: z.string().uuid().optional(),
    type: z.enum(['CLAIM', 'SUPPORT', 'COUNTER', 'QUESTION', 'SYNTHESIS']),
    claim: z.string().min(10, 'Claim must be at least 10 characters').max(1000),
    reasoning: z.string().min(20, 'Reasoning must be at least 20 characters').max(5000),
    evidence: z.array(z.object({
        type: z.enum(['CITATION', 'DATA', 'EXPERT_OUTPUT', 'EXTERNAL_LINK']),
        content: z.string().min(1).max(2000),
        sourceUrl: z.string().url().optional(),
    })).optional(),
});

const listQuerySchema = z.object({
    page: z.coerce.number().min(1).default(1),
    limit: z.coerce.number().min(1).max(100).default(20),
    status: z.enum(['OPEN', 'VOTING', 'RESOLVED', 'STALE', 'CLOSED']).optional(),
    expertId: z.string().uuid().optional(),
});

const updateStatusSchema = z.object({
    status: z.enum(['OPEN', 'VOTING', 'RESOLVED', 'STALE', 'CLOSED']),
    outcome: z.record(z.string(), z.unknown()).optional(),
});

/**
 * GET /api/debates
 * List all debates with pagination
 */
router.get(
    '/',
    asyncHandler(async (req: Request, res: Response) => {
        const query = listQuerySchema.parse(req.query);
        const result = await debateService.list(query);

        res.json({
            success: true,
            ...result,
        });
    })
);

/**
 * GET /api/debates/:id
 * Get debate by ID with arguments
 */
router.get(
    '/:id',
    asyncHandler(async (req: Request, res: Response) => {
        const id = req.params.id as string;
        const debate = await debateService.getById(id);

        res.json({
            success: true,
            data: debate,
        });
    })
);

/**
 * GET /api/debates/:id/stats
 * Get debate statistics
 */
router.get(
    '/:id/stats',
    asyncHandler(async (req: Request, res: Response) => {
        const id = req.params.id as string;
        const stats = await debateService.getStats(id);

        res.json({
            success: true,
            data: stats,
        });
    })
);

/**
 * POST /api/debates
 * Create a new debate
 */
router.post(
    '/',
    authenticate,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
        const input = createDebateSchema.parse(req.body);

        const debate = await debateService.create(req.user!.id, input);

        await createAuditEvent(req, {
            action: 'DEBATE_CREATED',
            resourceType: 'Debate',
            resourceId: debate.id as string,
            newState: { topic: input.topic, expertId: input.expertId },
        });

        res.status(201).json({
            success: true,
            data: debate,
        });
    })
);

/**
 * POST /api/debates/:id/arguments
 * Add an argument to a debate
 */
router.post(
    '/:id/arguments',
    authenticate,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
        const input = createArgumentSchema.parse(req.body);
        const debateId = req.params.id as string;

        const argument = await debateService.addArgument(req.user!.id, {
            debateId,
            ...input,
        });

        const argumentData = argument as unknown as Record<string, unknown> | null;

        await createAuditEvent(req, {
            action: 'ARGUMENT_ADDED',
            resourceType: 'Argument',
            resourceId: argumentData?.id as string | undefined,
            newState: { type: input.type, claim: input.claim.substring(0, 100) },
            metadata: { debateId },
        });

        res.status(201).json({
            success: true,
            data: argument,
        });
    })
);

/**
 * PATCH /api/debates/:id/status
 * Update debate status (requires moderator role)
 */
router.patch(
    '/:id/status',
    authenticate,
    requireRole('MODERATOR', 'ADMIN', 'SUPER_ADMIN'),
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
        const { status, outcome } = updateStatusSchema.parse(req.body);
        const id = req.params.id as string;

        const currentDebate = await debateService.getById(id);

        const debate = await debateService.updateStatus(id, status, outcome);

        await createAuditEvent(req, {
            action: 'DEBATE_STATUS_CHANGED',
            resourceType: 'Debate',
            resourceId: id,
            previousState: { status: currentDebate.status },
            newState: { status, outcome },
        });

        res.json({
            success: true,
            data: debate,
        });
    })
);

export default router;
