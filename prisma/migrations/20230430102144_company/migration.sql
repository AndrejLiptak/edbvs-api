-- AlterTable
ALTER TABLE "User" ADD COLUMN     "companyICO" INTEGER,
ADD COLUMN     "companyName" TEXT,
ADD COLUMN     "isCopmany" BOOLEAN NOT NULL DEFAULT false;
