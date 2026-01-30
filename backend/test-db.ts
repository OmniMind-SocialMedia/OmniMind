import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Connecting...');
    /*
    const adminPassword = 'hashedpassword';
    const user = await prisma.user.create({
       data: {
         email: 'test-' + Date.now() + '@example.com',
         passwordHash: adminPassword,
         displayName: 'Test User',
         role: 'USER',
         status: 'ACTIVE',
       }
    });
    console.log('Created:', user);
    */
    // Wait, I will uncomment it
    const user = await prisma.user.create({
        data: {
            email: 'test-' + Date.now() + '@example.com',
            passwordHash: 'hash',
            displayName: 'Test User'
        }
    });
    console.log('Created:', user);
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
