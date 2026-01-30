import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/index.js';
import prisma from '../config/database.js';

export interface AuthenticatedRequest extends Request {
    user?: {
        id: string;
        email: string;
        role: string;
    };
}

export interface JwtPayload {
    userId: string;
    email: string;
    role: string;
}

/**
 * Middleware to verify JWT token and attach user to request
 */
export async function authenticate(
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
): Promise<void> {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            res.status(401).json({
                error: 'Unauthorized',
                message: 'No token provided',
            });
            return;
        }

        const token = authHeader.substring(7);

        try {
            const decoded = jwt.verify(token, config.jwt.secret) as JwtPayload;

            // Verify user still exists and is active
            const user = await prisma.user.findFirst({
                where: { id: decoded.userId },
                select: { id: true, email: true, role: true, status: true },
            });

            if (!user || user.status !== 'ACTIVE') {
                res.status(401).json({
                    error: 'Unauthorized',
                    message: 'User not found or inactive',
                });
                return;
            }

            req.user = {
                id: user.id,
                email: user.email,
                role: user.role,
            };

            next();
        } catch (jwtError) {
            res.status(401).json({
                error: 'Unauthorized',
                message: 'Invalid or expired token',
            });
        }
    } catch (error) {
        next(error);
    }
}

/**
 * Middleware to require specific roles
 */
export function requireRole(...allowedRoles: string[]) {
    return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
        if (!req.user) {
            res.status(401).json({
                error: 'Unauthorized',
                message: 'Authentication required',
            });
            return;
        }

        if (!allowedRoles.includes(req.user.role)) {
            res.status(403).json({
                error: 'Forbidden',
                message: 'Insufficient permissions',
            });
            return;
        }

        next();
    };
}

/**
 * Optional authentication - attaches user if token present, but doesn't require it
 */
export async function optionalAuth(
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
): Promise<void> {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        next();
        return;
    }

    try {
        const token = authHeader.substring(7);
        const decoded = jwt.verify(token, config.jwt.secret) as JwtPayload;

        req.user = {
            id: decoded.userId,
            email: decoded.email,
            role: decoded.role,
        };
    } catch {
        // Token invalid, but that's okay for optional auth
    }

    next();
}
