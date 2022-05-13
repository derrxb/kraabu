-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('Pending', 'Completed', 'Failed');

-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('BZD', 'USD');

-- CreateEnum
CREATE TYPE "EKyashStatus" AS ENUM ('New', 'Pending', 'Canceled', 'Success');

-- CreateTable
CREATE TABLE "Ekyash" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "api" VARCHAR(255) NOT NULL,
    "sid" BIGINT NOT NULL,
    "pinHash" VARCHAR(255) NOT NULL,
    "pinEncoded" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,

    CONSTRAINT "Ekyash_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Supplier" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "tag" VARCHAR(255) NOT NULL,
    "logoUrl" VARCHAR(255) NOT NULL,
    "homepage" VARCHAR(255) NOT NULL,
    "ekyashId" INTEGER,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EKyashTransaction" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deeplinkUrl" VARCHAR(255) NOT NULL,
    "qrCodeUrl" VARCHAR(255) NOT NULL,
    "status" "EKyashStatus" NOT NULL DEFAULT E'Pending',
    "invoiceId" VARCHAR(255) NOT NULL,
    "transactionId" VARCHAR(255) NOT NULL,
    "invoiceUrl" VARCHAR(255) NOT NULL,
    "orderId" INTEGER NOT NULL,

    CONSTRAINT "EKyashTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "invoice" VARCHAR(255) NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT E'Pending',
    "currency" "Currency" NOT NULL DEFAULT E'BZD',
    "amount" INTEGER NOT NULL,
    "supplierId" INTEGER NOT NULL,
    "additionalData" JSONB NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "price" INTEGER NOT NULL,
    "currency" "Currency" NOT NULL DEFAULT E'BZD',
    "orderId" INTEGER NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_username_key" ON "Supplier"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_ekyashId_key" ON "Supplier"("ekyashId");

-- CreateIndex
CREATE UNIQUE INDEX "EKyashTransaction_orderId_key" ON "EKyashTransaction"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "Order_invoice_key" ON "Order"("invoice");

-- AddForeignKey
ALTER TABLE "Supplier" ADD CONSTRAINT "Supplier_ekyashId_fkey" FOREIGN KEY ("ekyashId") REFERENCES "Ekyash"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EKyashTransaction" ADD CONSTRAINT "EKyashTransaction_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
