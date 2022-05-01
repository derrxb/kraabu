-- DropForeignKey
ALTER TABLE "Supplier" DROP CONSTRAINT "Supplier_ekyashId_fkey";

-- AlterTable
ALTER TABLE "Supplier" ALTER COLUMN "ekyashId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Supplier" ADD CONSTRAINT "Supplier_ekyashId_fkey" FOREIGN KEY ("ekyashId") REFERENCES "Ekyash"("id") ON DELETE SET NULL ON UPDATE CASCADE;
