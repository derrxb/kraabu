-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('Pending', 'Completed', 'Failed');

-- CreateTable
CREATE TABLE "Ekyash" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "api" VARCHAR(255) NOT NULL,
    "sid" VARCHAR(255) NOT NULL,
    "pinHash" VARCHAR(255) NOT NULL,
    "pinEncoded" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,

    CONSTRAINT "Ekyash_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Supplier" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "tag" VARCHAR(255) NOT NULL,
    "logoUrl" VARCHAR(255) NOT NULL,
    "homepage" VARCHAR(255) NOT NULL,
    "ekyashId" INTEGER NOT NULL,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "invoice" VARCHAR(255) NOT NULL,
    "status" "PaymentStatus" NOT NULL DEFAULT E'Pending',
    "amount" INTEGER NOT NULL,
    "supplierId" INTEGER NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Supplier" ADD CONSTRAINT "Supplier_ekyashId_fkey" FOREIGN KEY ("ekyashId") REFERENCES "Ekyash"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
