-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('BZD', 'USD');

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "currency" "Currency" NOT NULL DEFAULT E'BZD';
