/// <reference types="node" />
import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';

const MONGO_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/omnimind?authSource=admin';

async function main() {
    console.log('Seeding database with native MongoDB driver...');

    const client = new MongoClient(MONGO_URL);
    await client.connect();
    const db = client.db();

    // Create admin user
    const adminPassword = await bcrypt.hash('admin123', 12);
    const usersCollection = db.collection('User');

    let admin = await usersCollection.findOne({ email: 'admin@omnimind.io' });
    if (!admin) {
        await usersCollection.insertOne({
            email: 'admin@omnimind.io',
            passwordHash: adminPassword,
            displayName: 'System Admin',
            role: 'SUPER_ADMIN',
            status: 'ACTIVE',
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        admin = await usersCollection.findOne({ email: 'admin@omnimind.io' });
    }
    console.log('Created admin user:', admin?.email);

    // Create demo users
    const userPassword = await bcrypt.hash('password123', 12);

    let john = await usersCollection.findOne({ email: 'john@example.com' });
    if (!john) {
        await usersCollection.insertOne({
            email: 'john@example.com',
            passwordHash: userPassword,
            displayName: 'John Doe',
            role: 'USER',
            status: 'ACTIVE',
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        john = await usersCollection.findOne({ email: 'john@example.com' });
    }

    let jane = await usersCollection.findOne({ email: 'jane@example.com' });
    if (!jane) {
        await usersCollection.insertOne({
            email: 'jane@example.com',
            passwordHash: userPassword,
            displayName: 'Jane Smith',
            role: 'REVIEWER',
            status: 'ACTIVE',
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        jane = await usersCollection.findOne({ email: 'jane@example.com' });
    }

    console.log('Created demo users');

    // Create reputation scores
    const reputationCollection = db.collection('ReputationScore');
    const reputationData = [
        { userId: admin!._id, domain: 'general', score: 1000, rank: 'STEWARD', evidenceCount: 0, accuracyRate: 0, lastActiveAt: new Date(), lastCalculatedAt: new Date() },
        { userId: john!._id, domain: 'general', score: 450, rank: 'EXPERT', evidenceCount: 0, accuracyRate: 0, lastActiveAt: new Date(), lastCalculatedAt: new Date() },
        { userId: john!._id, domain: 'finance', score: 320, rank: 'CONTRIBUTOR', evidenceCount: 0, accuracyRate: 0, lastActiveAt: new Date(), lastCalculatedAt: new Date() },
        { userId: jane!._id, domain: 'general', score: 380, rank: 'CONTRIBUTOR', evidenceCount: 0, accuracyRate: 0, lastActiveAt: new Date(), lastCalculatedAt: new Date() },
        { userId: jane!._id, domain: 'legal', score: 280, rank: 'CONTRIBUTOR', evidenceCount: 0, accuracyRate: 0, lastActiveAt: new Date(), lastCalculatedAt: new Date() },
    ];

    for (const rep of reputationData) {
        const exists = await reputationCollection.findOne({ userId: rep.userId, domain: rep.domain });
        if (!exists) {
            await reputationCollection.insertOne(rep);
        }
    }
    console.log('Created reputation scores');

    // Create sample experts
    const expertsCollection = db.collection('Expert');
    const expertVersionsCollection = db.collection('ExpertVersion');

    let financialExpert = await expertsCollection.findOne({ slug: 'financial-analysis' });
    if (!financialExpert) {
        const insertResult = await expertsCollection.insertOne({
            slug: 'financial-analysis',
            status: 'ACTIVE',
            createdById: john!._id,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        await expertVersionsCollection.insertOne({
            expertId: insertResult.insertedId,
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
            createdById: john!._id,
            accuracyScore: 94.7,
            usageCount: 1234,
            createdAt: new Date(),
        });

        financialExpert = await expertsCollection.findOne({ slug: 'financial-analysis' });
    }
    console.log('Created Financial Analysis expert');

    let legalExpert = await expertsCollection.findOne({ slug: 'legal-compliance' });
    if (!legalExpert) {
        const insertResult = await expertsCollection.insertOne({
            slug: 'legal-compliance',
            status: 'ACTIVE',
            createdById: jane!._id,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        await expertVersionsCollection.insertOne({
            expertId: insertResult.insertedId,
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
            createdById: jane!._id,
            accuracyScore: 91.2,
            usageCount: 567,
            createdAt: new Date(),
        });
    }
    console.log('Created Legal Compliance expert');

    // Create sample debate
    const debatesCollection = db.collection('Debate');
    const argumentsCollection = db.collection('Argument');

    let debate = await debatesCollection.findOne({ topic: 'Improve accuracy threshold logic for edge cases' });
    if (!debate && financialExpert) {
        const debateResult = await debatesCollection.insertOne({
            expertId: financialExpert._id,
            topic: 'Improve accuracy threshold logic for edge cases',
            description: 'Discussion on whether the current 85% accuracy threshold is appropriate for high-stakes financial decisions.',
            status: 'OPEN',
            resolutionCriteria: 'Consensus from 3+ authority-level validators',
            createdById: john!._id,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        await argumentsCollection.insertOne({
            debateId: debateResult.insertedId,
            type: 'CLAIM',
            claim: 'The current 85% accuracy threshold is too low for high-stakes financial decisions.',
            reasoning: 'Our analysis shows that decisions made at 85% confidence have a 12% error rate in production, which is unacceptable for portfolio management over $1M.',
            status: 'ACTIVE',
            validationStatus: 'PENDING',
            authorReputationAtTime: 450,
            createdById: john!._id,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        console.log('Created sample debate');
    }

    // Create system settings
    const settingsCollection = db.collection('SystemSetting');
    const settings = [
        { key: 'debate.minArgumentLength', value: { claim: 10, reasoning: 20 }, updatedAt: new Date() },
        { key: 'reputation.decayRate', value: { daily: 0.01, inactivityDays: 30 }, updatedAt: new Date() },
        { key: 'expert.approvalThreshold', value: { minAuthorities: 3 }, updatedAt: new Date() },
    ];

    for (const setting of settings) {
        const exists = await settingsCollection.findOne({ key: setting.key });
        if (!exists) {
            await settingsCollection.insertOne(setting);
        }
    }
    console.log('Created system settings');

    console.log('\n✅ Database seeded successfully!');
    console.log('\nDemo credentials:');
    console.log('  Admin: admin@omnimind.io / admin123');
    console.log('  User:  john@example.com / password123');
    console.log('  User:  jane@example.com / password123');

    await client.close();
}

main()
    .catch((e) => {
        console.error('Seed error:', e);
        process.exit(1);
    });
