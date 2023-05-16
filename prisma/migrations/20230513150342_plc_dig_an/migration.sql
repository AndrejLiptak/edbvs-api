/*
  Warnings:

  - Added the required column `analogIn` to the `PLC` table without a default value. This is not possible if the table is not empty.
  - Added the required column `analogOut` to the `PLC` table without a default value. This is not possible if the table is not empty.
  - Added the required column `digitalIn` to the `PLC` table without a default value. This is not possible if the table is not empty.
  - Added the required column `digitalOut` to the `PLC` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PLC" ADD COLUMN     "analogIn" INTEGER NOT NULL,
ADD COLUMN     "analogOut" INTEGER NOT NULL,
ADD COLUMN     "digitalIn" INTEGER NOT NULL,
ADD COLUMN     "digitalOut" INTEGER NOT NULL;
