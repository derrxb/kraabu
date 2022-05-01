/*
  Warnings:

  - A unique constraint covering the columns `[invoice]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Payment_invoice_key" ON "Payment"("invoice");
