/*
  Warnings:

  - The primary key for the `CompanyRequest` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userID` on the `CompanyRequest` table. All the data in the column will be lost.
  - Added the required column `companyICO` to the `CompanyRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyName` to the `CompanyRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userEmail` to the `CompanyRequest` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CompanyRequest" DROP CONSTRAINT "CompanyRequest_userID_fkey";

-- AlterTable
ALTER TABLE "CompanyRequest" DROP CONSTRAINT "CompanyRequest_pkey",
DROP COLUMN "userID",
ADD COLUMN     "companyICO" INTEGER NOT NULL,
ADD COLUMN     "companyName" TEXT NOT NULL,
ADD COLUMN     "rejected" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "userEmail" TEXT NOT NULL,
ADD CONSTRAINT "CompanyRequest_pkey" PRIMARY KEY ("userEmail");

-- AddForeignKey
ALTER TABLE "CompanyRequest" ADD CONSTRAINT "CompanyRequest_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
