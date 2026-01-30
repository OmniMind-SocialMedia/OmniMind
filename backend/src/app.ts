import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';

import { config } from './config/index.js';
import { errorHandler } from './middleware/errorHandler.js';
import { requestId } from './middleware/audit.js';

// Import routes
import authRoutes from './routes/auth.js';
import expertRoutes from './routes/experts.js';
import debateRoutes from './routes/debates.js';

/**
 * Create and configure Express application
 */
export function createApp() {
    const app = express();

    // Security middleware
    app.use(helmet({
        contentSecurityPolicy: config.nodeEnv === 'production',
    }));

    // CORS
    app.use(cors({
        origin: config.corsOrigin,
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-ID'],
    }));

    // Request parsing
    app.use(express.json({ limit: '10mb' }));
    app.use(express.urlencoded({ extended: true }));

    // Compression
    app.use(compression());

    // Logging
    if (config.nodeEnv !== 'test') {
        app.use(morgan(config.nodeEnv === 'production' ? 'combined' : 'dev'));
    }

    // Request ID for tracing
    app.use(requestId);

    // Health check
    app.get('/health', (req, res) => {
        res.json({
            status: 'ok',
            timestamp: new Date().toISOString(),
            version: process.env.npm_package_version || '1.0.0',
        });
    });

    // API routes
    app.use('/api/auth', authRoutes);
    app.use('/api/experts', expertRoutes);
    app.use('/api/debates', debateRoutes);

    // 404 handler
    app.use((req, res) => {
        res.status(404).json({
            error: 'Not Found',
            message: `Cannot ${req.method} ${req.path}`,
        });
    });

    // Error handler (must be last)
    app.use(errorHandler);

    return app;
}
