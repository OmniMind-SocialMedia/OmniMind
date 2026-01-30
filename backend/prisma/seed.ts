/// <reference types="node" />
import { PrismaClient } from './generated-client/index.js';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    // Create admin user
    const adminPassword = await bcrypt.hash('admin123', 12);
    let admin = await prisma.user.findFirst({ where: { email: 'admin@omnimind.io' } });
    if (!admin) {
        admin = await prisma.user.create({
            data: {
                email: 'admin@omnimind.io',
                passwordHash: adminPassword,
                displayName: 'System Admin',
                role: 'SUPER_ADMIN',
                status: 'ACTIVE',
            },
        });
    }
    console.log('Created admin user:', admin.email);

    // Create demo users
    const userPassword = await bcrypt.hash('password123', 12);

    let john = await prisma.user.findFirst({ where: { email: 'john@example.com' } });
    if (!john) {
        john = await prisma.user.create({
            data: {
                email: 'john@example.com',
                passwordHash: userPassword,
                displayName: 'John Doe',
                role: 'USER',
                status: 'ACTIVE',
            },
        });
    }

    let jane = await prisma.user.findFirst({ where: { email: 'jane@example.com' } });
    if (!jane) {
        jane = await prisma.user.create({
            data: {
                email: 'jane@example.com',
                passwordHash: userPassword,
                displayName: 'Jane Smith',
                role: 'REVIEWER',
                status: 'ACTIVE',
            },
        });
    }

    console.log('Created demo users');

    // Create reputation scores (one by one to avoid transaction if createMany is not supported or safe)
    // Actually createMany is supported on Mongo usually, but let's be safe.
    const reputationData = [
        { userId: admin!.id, domain: 'general', score: 1000, rank: 'STEWARD' },
        { userId: john!.id, domain: 'general', score: 450, rank: 'EXPERT' },
        { userId: john!.id, domain: 'finance', score: 320, rank: 'CONTRIBUTOR' },
        { userId: jane!.id, domain: 'general', score: 380, rank: 'CONTRIBUTOR' },
        { userId: jane!.id, domain: 'legal', score: 280, rank: 'CONTRIBUTOR' },
    ];

    for (const rep of reputationData) {
        // cast rank to any to avoid TS issues if enum import is missing
        await prisma.reputationScore.findFirst({
            where: { userId: rep.userId, domain: rep.domain }
        }).then(async (exists) => {
            if (!exists) {
                await prisma.reputationScore.create({ data: rep as any });
            }
        });
    }
    console.log('Created reputation scores');

    // Create sample experts
    const financialExpert = await prisma.expert.create({
        data: {
            slug: 'financial-analysis-' + Date.now(),
            status: 'ACTIVE',
            createdById: john.id,
            versions: {
                create: {
                    versionNumber: 1,
                    scope: {
                        domain: 'Finance',
                        subdomains: ['Equity Analysis', 'Fixed Income', 'Portfolio Management'],
                        inputTypes: ['Market Data', 'Financial Statements'],
                        outputTypes: ['Risk Assessment', 'Investment Recommendations'],
                        limitations: ['Not suitable for cryptocurrency', 'Requires quarterly updates'],
                    },
                    permissions: {
                        invokeRoles: ['USER', 'REVIEWER', 'MODERATOR', 'ADMIN'],
                        editRoles: ['MODERATOR', 'ADMIN'],
                        approveRoles: ['ADMIN'],
                        viewRoles: ['USER', 'REVIEWER', 'MODERATOR', 'ADMIN'],
                    },
                    logicDefinition: {
                        type: 'rule-based',
                        rules: [
                            { condition: 'pe_ratio > 25', action: 'flag_as_overvalued' },
                            { condition: 'debt_ratio > 0.7', action: 'increase_risk_score' },
                        ],
                    },
                    changeReason: 'Initial version of financial analysis expert',
                    createdById: john.id,
                    accuracyScore: 94.7,
                    usageCount: 1234,
                },
            },
        },
    });
    console.log('Created Financial Analysis expert');

    const legalExpert = await prisma.expert.create({
        data: {
            slug: 'legal-compliance-' + Date.now(),
            status: 'ACTIVE',
            createdById: jane.id,
            versions: {
                create: {
                    versionNumber: 1,
                    scope: {
                        domain: 'Legal',
                        subdomains: ['Regulatory Compliance', 'Contract Review'],
                        inputTypes: ['Legal Documents', 'Regulatory Text'],
                        outputTypes: ['Compliance Assessment', 'Risk Flags'],
                        limitations: ['Not legal advice', 'US jurisdiction only'],
                    },
                    permissions: {
                        invokeRoles: ['USER', 'REVIEWER', 'MODERATOR', 'ADMIN'],
                        editRoles: ['MODERATOR', 'ADMIN'],
                        approveRoles: ['ADMIN'],
                        viewRoles: ['USER', 'REVIEWER', 'MODERATOR', 'ADMIN'],
                    },
                    logicDefinition: {
                        type: 'pattern-matching',
                        patterns: ['GDPR', 'CCPA', 'SOX'],
                    },
                    changeReason: 'Initial version of legal compliance expert',
                    createdById: jane.id,
                    accuracyScore: 91.2,
                    usageCount: 567,
                },
            },
        },
    });
    console.log('Created Legal Compliance expert');

    // Create sample debate
    const debate = await prisma.debate.create({
        data: {
            expertId: financialExpert.id,
            topic: 'Improve accuracy threshold logic for edge cases',
            description: 'Discussion on whether the current 85% accuracy threshold is appropriate for high-stakes financial decisions.',
            status: 'OPEN',
            resolutionCriteria: 'Consensus from 3+ authority-level validators',
            createdById: john.id,
            arguments: {
                create: [
                    {
                        type: 'CLAIM',
                        claim: 'The current 85% accuracy threshold is too low for high-stakes financial decisions.',
                        reasoning: 'Our analysis shows that decisions made at 85% confidence have a 12% error rate in production, which is unacceptable for portfolio management over $1M.',
                        authorReputationAtTime: 450,
                        createdById: john.id,
                        evidence: {
                            create: [
                                {
                                    type: 'DATA',
                                    content: 'Production error logs Q4 2025',
                                },
                                {
                                    type: 'CITATION',
                                    content: 'Industry standard recommends 95% for high-stakes decisions',
                                },
                            ],
                        },
                    },
                ],
            },
        },
    });
    console.log('Created sample debate');

    // Add counter-argument
    const rootArgument = await prisma.argument.findFirst({
        where: { debateId: debate.id },
    });

    if (rootArgument) {
        await prisma.argument.create({
            data: {
                debateId: debate.id,
                parentArgumentId: rootArgument.id,
                type: 'COUNTER',
                claim: 'Raising threshold to 95% would reduce coverage by 40%.',
                reasoning: 'Analysis of our validation dataset shows only 60% of queries reach 95% confidence.',
                authorReputationAtTime: 380,
                createdById: jane.id,
                evidence: {
                    create: [
                        {
                            type: 'DATA',
                            content: 'Confidence distribution analysis',
                        },
                    ],
                },
            },
        });
        console.log('Added counter-argument');
    }

    // Create system settings
    const settings = [
        { key: 'debate.minArgumentLength', value: { claim: 10, reasoning: 20 } },
        { key: 'reputation.decayRate', value: { daily: 0.01, inactivityDays: 30 } },
        { key: 'expert.approvalThreshold', value: { minAuthorities: 3 } },
    ];

    for (const setting of settings) {
        const exists = await prisma.systemSetting.findUnique({ where: { key: setting.key } });
        if (!exists) {
            await prisma.systemSetting.create({ data: setting });
        }
    }
    console.log('Created system settings');

    console.log('\n✅ Database seeded successfully!');
    console.log('\nDemo credentials:');
    console.log('  Admin: admin@omnimind.io / admin123');
    console.log('  User:  john@example.com / password123');
    console.log('  User:  jane@example.com / password123');
}

main()
    .catch((e) => {
        console.error('Seed error:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
