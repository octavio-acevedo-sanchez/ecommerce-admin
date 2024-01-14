import { PrismaClient } from '@prisma/client';

declare global {
	// eslint-disable-next-line no-var
	var prisma: PrismaClient | undefined;
}

const prismadb = globalThis.prisma ?? new PrismaClient();
if (process.env.MODE_ENV !== 'production') globalThis.prisma = prismadb;

export default prismadb;
