/// <reference types="node" />
import prisma from '../src/config/database.js';
import bcrypt from 'bcryptjs';

async function main() {
    console.log('Seeding database...');

    // Create admin user
    const adminPassword = await bcrypt.hash('admin123', 12);
    const admin = await prisma.user.upsert({
        where: { email: 'admin@omnimind.io' },
        update: {},
        create: {
            email: 'admin@omnimind.io',
            passwordHash: adminPassword,
            displayName: 'System Admin',
            role: 'SUPER_ADMIN',
            status: 'ACTIVE',
        },
    });
    console.log('Created admin user:', admin.email);

    // Create demo users
    const userPassword = await bcrypt.hash('password123', 12);

    const john = await prisma.user.upsert({
        where: { email: 'john@example.com' },
        update: {},
        create: {
            email: 'john@example.com',
            passwordHash: userPassword,
            displayName: 'John Doe',
            role: 'USER',
            status: 'ACTIVE',
        },
    });

    const jane = await prisma.user.upsert({
        where: { email: 'jane@example.com' },
        update: {},
        create: {
            email: 'jane@example.com',
            passwordHash: userPassword,
            displayName: 'Jane Smith',
            role: 'REVIEWER',
            status: 'ACTIVE',
        },
    });

    console.log('Created demo users');

    // Create reputation scores
    await prisma.reputationScore.createMany({
        data: [
            { userId: admin.id, domain: 'general', score: 1000, rank: 'STEWARD' },
            { userId: john.id, domain: 'general', score: 450, rank: 'EXPERT' },
            { userId: john.id, domain: 'finance', score: 320, rank: 'CONTRIBUTOR' },
            { userId: jane.id, domain: 'general', score: 380, rank: 'CONTRIBUTOR' },
            { userId: jane.id, domain: 'legal', score: 280, rank: 'CONTRIBUTOR' },
        ],
        skipDuplicates: true,
    });
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
    await prisma.systemSetting.createMany({
        data: [
            { key: 'debate.minArgumentLength', value: { claim: 10, reasoning: 20 } },
            { key: 'reputation.decayRate', value: { daily: 0.01, inactivityDays: 30 } },
            { key: 'expert.approvalThreshold', value: { minAuthorities: 3 } },
        ],
        skipDuplicates: true,
    });
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
