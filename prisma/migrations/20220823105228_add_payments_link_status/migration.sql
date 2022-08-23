-- CreateEnum
CREATE TYPE "PaymentLinkStatus" AS ENUM ('Pending', 'Completed', 'Expired');

-- AlterTable
ALTER TABLE "PaymentLink" ADD COLUMN     "status" "PaymentLinkStatus" NOT NULL DEFAULT E'Pending';
