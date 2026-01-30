import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const config = {
    // Server
    nodeEnv: process.env.NODE_ENV || 'development',
    port: parseInt(process.env.PORT || '3001', 10),

    // Database
    databaseUrl: process.env.DATABASE_URL || '',

    // JWT
    jwt: {
        secret: process.env.JWT_SECRET || 'fallback-secret-do-not-use-in-prod',
        expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    },

    // CORS
    corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',

    // Rate Limiting
    rateLimit: {
        windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000', 10),
        max: parseInt(process.env.RATE_LIMIT_MAX || '100', 10),
    },

    // Feature flags
    features: {
        enableKrisIntegration: process.env.ENABLE_KRIS_INTEGRATION === 'true',
    },
} as const;

// Validate required configuration
export function validateConfig(): void {
    const required = ['DATABASE_URL', 'JWT_SECRET'];
    const missing = required.filter((key) => !process.env[key]);

    if (missing.length > 0 && config.nodeEnv === 'production') {
        throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
    }
}
