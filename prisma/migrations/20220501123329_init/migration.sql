/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Supplier` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `Supplier` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Supplier" ADD COLUMN     "username" VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_username_key" ON "Supplier"("username");
