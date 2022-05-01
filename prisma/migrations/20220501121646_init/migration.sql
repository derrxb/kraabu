/*
  Warnings:

  - Changed the type of `sid` on the `Ekyash` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Ekyash" DROP COLUMN "sid",
ADD COLUMN     "sid" INTEGER NOT NULL;
