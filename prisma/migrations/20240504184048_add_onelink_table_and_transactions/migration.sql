-- CreateEnum
CREATE TYPE "OneLinkStatus" AS ENUM ('New', 'Pending', 'Canceled', 'Success');

-- CreateTable
CREATE TABLE "OneLink" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "accessToken" VARCHAR(255) NOT NULL,
    "salt" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "OneLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OneLinkTransaction" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" "OneLinkStatus" NOT NULL DEFAULT E'Pending',
    "invoiceId" VARCHAR(255),
    "transactionId" VARCHAR(255),
    "invoiceUrl" VARCHAR(255),
    "orderId" INTEGER NOT NULL,

    CONSTRAINT "OneLinkTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OneLink_userId_key" ON "OneLink"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "OneLinkTransaction_orderId_key" ON "OneLinkTransaction"("orderId");

-- AddForeignKey
ALTER TABLE "OneLink" ADD CONSTRAINT "OneLink_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OneLinkTransaction" ADD CONSTRAINT "OneLinkTransaction_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
