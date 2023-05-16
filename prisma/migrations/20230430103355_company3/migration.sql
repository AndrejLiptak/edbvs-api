/*
  Warnings:

  - Made the column `companyICO` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `companyName` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "companyICO" SET NOT NULL,
ALTER COLUMN "companyICO" SET DEFAULT 0,
ALTER COLUMN "companyName" SET NOT NULL,
ALTER COLUMN "companyName" SET DEFAULT '';
