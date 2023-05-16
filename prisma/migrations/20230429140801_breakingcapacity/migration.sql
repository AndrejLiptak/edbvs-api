/*
  Warnings:

  - Added the required column `breakingCapacity` to the `CircuitBreaker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CircuitBreaker" ADD COLUMN     "breakingCapacity" INTEGER NOT NULL;
