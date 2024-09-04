const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const randomNumber = Math.floor(Math.random() * 100);
const uniqueEmail = `testuser_${Date.now()}@example.com`;

describe('Prisma Client Test', () => {
  test('should create a new user', async () => {
    const newUser = await prisma.user.create({
      data: {
        firstName: 'Test User',
        lastName: 'test User',
        nickName: `testuser${randomNumber}`,
        email: `testuser_${randomNumber}@example.com`,
        password: 'testpassword',
        role: 'USER',
      }
    });

    expect(newUser).toHaveProperty('id');
    expect(newUser.firstName).toBe('Test User');
    expect(newUser.lastName).toBe('test User');
    expect(newUser.nickName).toBe(`testuser${randomNumber}`);
    expect(newUser.email).toBe(`testuser_${randomNumber}@example.com`);
    expect(newUser.role).toBe('USER');
  });

  test('should fetch users', async () => {
    const users = await prisma.user.findMany();
    expect(users).toBeInstanceOf(Array);
  });
});


