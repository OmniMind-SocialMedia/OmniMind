import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

export interface ApiError extends Error {
    statusCode?: number;
    code?: string;
    details?: unknown;
}

/**
 * Custom error class for API errors
 */
export class AppError extends Error implements ApiError {
    statusCode: number;
    code: string;
    details?: unknown;

    constructor(message: string, statusCode = 500, code = 'INTERNAL_ERROR', details?: unknown) {
        super(message);
        this.statusCode = statusCode;
        this.code = code;
        this.details = details;
        this.name = 'AppError';

        Error.captureStackTrace(this, this.constructor);
    }
}

/**
 * Common error factories
 */
export const errors = {
    notFound: (resource: string) =>
        new AppError(`${resource} not found`, 404, 'NOT_FOUND'),

    badRequest: (message: string, details?: unknown) =>
        new AppError(message, 400, 'BAD_REQUEST', details),

    unauthorized: (message = 'Unauthorized') =>
        new AppError(message, 401, 'UNAUTHORIZED'),

    forbidden: (message = 'Forbidden') =>
        new AppError(message, 403, 'FORBIDDEN'),

    conflict: (message: string) =>
        new AppError(message, 409, 'CONFLICT'),

    internal: (message = 'Internal server error') =>
        new AppError(message, 500, 'INTERNAL_ERROR'),
};

/**
 * Global error handling middleware
 */
export function errorHandler(
    err: Error,
    req: Request,
    res: Response,
    _next: NextFunction
): void {
    // Log error
    console.error('[Error]', {
        message: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
        path: req.path,
        method: req.method,
    });

    // Handle Zod validation errors
    if (err instanceof ZodError) {
        res.status(400).json({
            error: 'Validation Error',
            code: 'VALIDATION_ERROR',
            details: err.issues.map((issue) => ({
                path: issue.path.join('.'),
                message: issue.message,
            })),
        });
        return;
    }

    // Handle custom AppError
    if (err instanceof AppError) {
        res.status(err.statusCode).json({
            error: err.message,
            code: err.code,
            details: err.details,
        });
        return;
    }

    // Handle Prisma errors
    if (err.name === 'PrismaClientKnownRequestError') {
        const prismaError = err as unknown as { code: string; meta?: { target?: string[] } };

        if (prismaError.code === 'P2002') {
            res.status(409).json({
                error: 'Resource already exists',
                code: 'CONFLICT',
                details: prismaError.meta?.target,
            });
            return;
        }

        if (prismaError.code === 'P2025') {
            res.status(404).json({
                error: 'Resource not found',
                code: 'NOT_FOUND',
            });
            return;
        }
    }

    // Default error response
    res.status(500).json({
        error: process.env.NODE_ENV === 'production'
            ? 'Internal server error'
            : err.message,
        code: 'INTERNAL_ERROR',
    });
}

/**
 * Async handler wrapper to catch errors in async route handlers
 */
export function asyncHandler(
    fn: (req: Request, res: Response, next: NextFunction) => Promise<void>
) {
    return (req: Request, res: Response, next: NextFunction): void => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
}
