/*
  Warnings:

  - Added the required column `ratedCurrent` to the `RCD` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RCD" ADD COLUMN     "ratedCurrent" INTEGER NOT NULL;
