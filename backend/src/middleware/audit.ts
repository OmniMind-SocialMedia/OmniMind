import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import prisma from '../config/database.js';
import { AuthenticatedRequest } from './auth.js';

export interface AuditContext {
    action: string;
    resourceType: string;
    resourceId?: string;
    previousState?: unknown;
    newState?: unknown;
    metadata?: Record<string, unknown>;
}

/**
 * Middleware to add request ID for tracing
 */
export function requestId(req: Request, res: Response, next: NextFunction): void {
    const id = uuidv4();
    req.headers['x-request-id'] = id;
    res.setHeader('X-Request-ID', id);
    next();
}

/**
 * Create an audit event
 */
export async function createAuditEvent(
    req: AuthenticatedRequest,
    context: AuditContext
): Promise<void> {
    try {
        await prisma.auditEvent.create({
            data: {
                actorId: req.user?.id,
                actorType: req.user ? 'USER' : 'SYSTEM',
                action: context.action,
                resourceType: context.resourceType,
                resourceId: context.resourceId,
                previousState: context.previousState as object | undefined,
                newState: context.newState as object | undefined,
                metadata: {
                    ...context.metadata,
                    requestId: req.headers['x-request-id'],
                    userAgent: req.headers['user-agent'],
                },
                ipAddressHash: hashIpAddress(req.ip || ''),
            },
        });
    } catch (error) {
        // Don't fail the request if audit logging fails
        console.error('[Audit] Failed to create audit event:', error);
    }
}

/**
 * Hash IP address for privacy
 */
function hashIpAddress(ip: string): string {
    // Simple hash for privacy - in production, use proper hashing
    if (!ip) return 'unknown';
    const parts = ip.split('.');
    if (parts.length === 4) {
        return `${parts[0]}.${parts[1]}.x.x`;
    }
    return 'redacted';
}

/**
 * Middleware factory to automatically audit specific actions
 */
export function auditAction(action: string, resourceType: string) {
    return async (
        req: AuthenticatedRequest,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        // Store original json method
        const originalJson = res.json.bind(res);

        // Override json to capture response
        res.json = function (body: unknown) {
            // Only audit successful responses
            if (res.statusCode >= 200 && res.statusCode < 300) {
                createAuditEvent(req, {
                    action,
                    resourceType,
                    resourceId: req.params.id as string | undefined,
                    newState: body,
                    metadata: {
                        method: req.method,
                        path: req.path,
                    },
                });
            }
            return originalJson(body);
        };

        next();
    };
}
