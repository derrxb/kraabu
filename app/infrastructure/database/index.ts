import {
  Currency,
  Ekyash as EkyashORM,
  Payment as PaymentORM,
  PaymentStatus,
  PrismaClient,
  Supplier as SupplierORM,
} from "@prisma/client";

// add prisma to the NodeJS global type
interface CustomNodeJsGlobal extends NodeJS.Global {
  prisma: PrismaClient;
}

// Prevent multiple instances of Prisma Client in development
declare const global: CustomNodeJsGlobal;

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export {
  type EkyashORM,
  type PaymentORM,
  type SupplierORM,
  Currency,
  PaymentStatus,
};

export default prisma;
