import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from '../config/index.js';
import prisma from '../config/database.js';
import { AppError, errors } from '../middleware/errorHandler.js';

export interface RegisterInput {
    email: string;
    password: string;
    displayName: string;
}

export interface LoginInput {
    email: string;
    password: string;
}

export interface AuthResponse {
    user: {
        id: string;
        email: string;
        displayName: string;
        role: string;
        reputationScore: number;
    };
    token: string;
    expiresIn: string;
}

/**
 * Auth Service - handles user authentication
 */
export const authService = {
    /**
     * Register a new user
     */
    async register(input: RegisterInput): Promise<AuthResponse> {
        // Check if user already exists
        const existingUser = await prisma.user.findFirst({
            where: { email: input.email.toLowerCase() },
        });

        if (existingUser) {
            throw errors.conflict('User with this email already exists');
        }

        // Hash password
        const passwordHash = await bcrypt.hash(input.password, 12);

        // Create user
        const user = await prisma.user.create({
            data: {
                email: input.email.toLowerCase(),
                passwordHash,
                displayName: input.displayName,
                role: 'USER',
                status: 'ACTIVE',
            },
        });

        // Create initial reputation scores for common domains
        await prisma.reputationScore.createMany({
            data: [
                { userId: user.id, domain: 'general', score: 100, rank: 'NOVICE' },
            ],
        });

        // Generate token
        const token = this.generateToken(user.id, user.email, user.role);

        // Get aggregate reputation
        const reputationScore = await this.getAggregateReputation(user.id);

        return {
            user: {
                id: user.id,
                email: user.email,
                displayName: user.displayName,
                role: user.role,
                reputationScore,
            },
            token,
            expiresIn: config.jwt.expiresIn,
        };
    },

    /**
     * Login user
     */
    async login(input: LoginInput): Promise<AuthResponse> {
        // Find user using findFirst to avoid aggregate pipeline issues on standalone MongoDB
        const user = await prisma.user.findFirst({
            where: { email: input.email.toLowerCase() },
        });

        if (!user) {
            throw errors.unauthorized('Invalid email or password');
        }

        // Check if user is active
        if (user.status !== 'ACTIVE') {
            throw errors.unauthorized('Account is suspended or deleted');
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(input.password, user.passwordHash);

        if (!isPasswordValid) {
            throw errors.unauthorized('Invalid email or password');
        }

        // Update last login - wrapped in try-catch to not block login if update fails
        // This is a workaround for standalone MongoDB which doesn't support transactions
        try {
            await prisma.$runCommandRaw({
                update: 'User',
                updates: [
                    {
                        q: { _id: { $oid: user.id } },
                        u: { $set: { lastLoginAt: new Date() } },
                    },
                ],
            });
        } catch (updateError) {
            console.warn('Failed to update lastLoginAt:', updateError);
            // Non-blocking - continue with login
        }

        // Generate token
        const token = this.generateToken(user.id, user.email, user.role);

        // Get aggregate reputation
        const reputationScore = await this.getAggregateReputation(user.id);

        return {
            user: {
                id: user.id,
                email: user.email,
                displayName: user.displayName,
                role: user.role,
                reputationScore,
            },
            token,
            expiresIn: config.jwt.expiresIn,
        };
    },

    /**
     * Get current user profile
     */
    async getProfile(userId: string) {
        const user = await prisma.user.findFirst({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                displayName: true,
                avatarUrl: true,
                role: true,
                status: true,
                createdAt: true,
                lastLoginAt: true,
                reputationScores: {
                    select: {
                        domain: true,
                        score: true,
                        rank: true,
                        evidenceCount: true,
                        accuracyRate: true,
                    },
                },
            },
        });

        if (!user) {
            throw errors.notFound('User');
        }

        const aggregateReputation = user.reputationScores.reduce(
            (sum: number, r: { score: number }) => sum + r.score,
            0
        );

        return {
            ...user,
            reputationScore: aggregateReputation,
        };
    },

    /**
     * Generate JWT token
     */
    generateToken(userId: string, email: string, role: string): string {
        const options: jwt.SignOptions = {
            expiresIn: config.jwt.expiresIn as jwt.SignOptions['expiresIn'],
        };
        return jwt.sign(
            { userId, email, role },
            config.jwt.secret,
            options
        );
    },

    /**
     * Get aggregate reputation score
     */
    async getAggregateReputation(userId: string): Promise<number> {
        const scores = await prisma.reputationScore.findMany({
            where: { userId },
            select: { score: true },
        });

        return scores.reduce((sum: number, r: { score: number }) => sum + r.score, 0);
    },
};
