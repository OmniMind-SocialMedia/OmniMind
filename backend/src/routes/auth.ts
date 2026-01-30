import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { authService } from '../services/authService.js';
import { authenticate, AuthenticatedRequest } from '../middleware/auth.js';
import { asyncHandler } from '../middleware/errorHandler.js';
import { createAuditEvent } from '../middleware/audit.js';

const router = Router();

// Validation schemas
const registerSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    displayName: z.string().min(2, 'Display name must be at least 2 characters').max(100),
});

const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required'),
});

/**
 * POST /api/auth/register
 * Register a new user
 */
router.post(
    '/register',
    asyncHandler(async (req: Request, res: Response) => {
        const input = registerSchema.parse(req.body);

        const result = await authService.register(input);

        // Audit the registration
        await createAuditEvent(req as AuthenticatedRequest, {
            action: 'USER_REGISTERED',
            resourceType: 'User',
            resourceId: result.user.id,
            newState: { email: result.user.email, displayName: result.user.displayName },
        });

        res.status(201).json({
            success: true,
            data: result,
        });
    })
);

/**
 * POST /api/auth/login
 * Login user
 */
router.post(
    '/login',
    asyncHandler(async (req: Request, res: Response) => {
        const input = loginSchema.parse(req.body);

        const result = await authService.login(input);

        // Audit the login
        await createAuditEvent(req as AuthenticatedRequest, {
            action: 'USER_LOGIN',
            resourceType: 'User',
            resourceId: result.user.id,
        });

        res.json({
            success: true,
            data: result,
        });
    })
);

/**
 * GET /api/auth/me
 * Get current user profile
 */
router.get(
    '/me',
    authenticate,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
        const profile = await authService.getProfile(req.user!.id);

        res.json({
            success: true,
            data: profile,
        });
    })
);

/**
 * POST /api/auth/logout
 * Logout user (client-side token removal, server-side audit)
 */
router.post(
    '/logout',
    authenticate,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
        // Audit the logout
        await createAuditEvent(req, {
            action: 'USER_LOGOUT',
            resourceType: 'User',
            resourceId: req.user!.id,
        });

        res.json({
            success: true,
            message: 'Logged out successfully',
        });
    })
);

export default router;
