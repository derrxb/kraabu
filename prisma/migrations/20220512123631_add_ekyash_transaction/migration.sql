-- CreateEnum
CREATE TYPE "EKyashStatus" AS ENUM ('New', 'Pending', 'Canceled', 'Success');

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

    CONSTRAINT "EKyashTransaction_pkey" PRIMARY KEY ("id")
);
