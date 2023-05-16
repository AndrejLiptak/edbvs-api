/*
  Warnings:

  - Added the required column `type` to the `CircuitBreaker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CircuitBreaker" ADD COLUMN     "type" TEXT NOT NULL,
ALTER COLUMN "poleCount" SET DATA TYPE TEXT;
