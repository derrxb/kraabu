/*
  Warnings:

  - You are about to drop the column `deeplinkUrl` on the `EKyashTransaction` table. All the data in the column will be lost.
  - Added the required column `deepLinkUrl` to the `EKyashTransaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EKyashTransaction" DROP COLUMN "deeplinkUrl",
ADD COLUMN     "deepLinkUrl" VARCHAR(255) NOT NULL;
