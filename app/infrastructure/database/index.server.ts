import type { Ekyash as EkyashORM, Payment as PaymentORM, Supplier as SupplierORM } from '@prisma/client';
import { Currency, PaymentStatus, PrismaClient } from '@prisma/client';

// add prisma to the NodeJS global type
interface CustomNodeJsGlobal extends NodeJS.Global {
  prisma: PrismaClient;
}

// Prevent multiple instances of Prisma Client in development
declare const global: CustomNodeJsGlobal;

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') global.prisma = prisma;

export { type EkyashORM, type PaymentORM, type SupplierORM, Currency, PaymentStatus };

export default prisma;
