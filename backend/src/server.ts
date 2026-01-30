import { createApp } from './app.js';
import { config, validateConfig } from './config/index.js';
import prisma from './config/database.js';

/**
 * Start the server
 */
async function main() {
    try {
        // Validate configuration
        validateConfig();

        // Test database connection
        await prisma.$connect();
        console.log('[Database] Connected successfully');

        // Create and start app
        const app = createApp();

        const server = app.listen(config.port, () => {
            console.log(`[Server] OmniMind API running on port ${config.port}`);
            console.log(`[Server] Environment: ${config.nodeEnv}`);
            console.log(`[Server] CORS Origin: ${config.corsOrigin}`);
        });

        // Graceful shutdown
        const shutdown = async (signal: string) => {
            console.log(`\n[Server] Received ${signal}, shutting down gracefully...`);

            server.close(async () => {
                console.log('[Server] HTTP server closed');

                await prisma.$disconnect();
                console.log('[Database] Disconnected');

                process.exit(0);
            });

            // Force close after 10 seconds
            setTimeout(() => {
                console.error('[Server] Could not close connections in time, forcefully shutting down');
                process.exit(1);
            }, 10000);
        };

        process.on('SIGTERM', () => shutdown('SIGTERM'));
        process.on('SIGINT', () => shutdown('SIGINT'));

    } catch (error) {
        console.error('[Server] Failed to start:', error);
        await prisma.$disconnect();
        process.exit(1);
    }
}

main();
