/*
  Warnings:

  - A unique constraint covering the columns `[ekyashId]` on the table `Supplier` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Supplier_ekyashId_key" ON "Supplier"("ekyashId");
