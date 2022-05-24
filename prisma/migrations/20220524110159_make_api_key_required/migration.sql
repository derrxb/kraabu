/*
  Warnings:

  - Made the column `apiKey` on table `Ekyash` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Ekyash" ALTER COLUMN "apiKey" SET NOT NULL;
