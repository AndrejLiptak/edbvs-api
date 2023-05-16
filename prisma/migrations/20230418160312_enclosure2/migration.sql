/*
  Warnings:

  - Added the required column `userEmail` to the `Enclosure` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Enclosure" ADD COLUMN     "userEmail" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Enclosure" ADD CONSTRAINT "Enclosure_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
