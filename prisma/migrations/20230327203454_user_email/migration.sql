/*
  Warnings:

  - You are about to drop the column `userId` on the `CircuitBreaker` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `GenericDevice` table. All the data in the column will be lost.
  - Added the required column `userEmail` to the `CircuitBreaker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userEmail` to the `GenericDevice` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CircuitBreaker" DROP CONSTRAINT "CircuitBreaker_userId_fkey";

-- DropForeignKey
ALTER TABLE "GenericDevice" DROP CONSTRAINT "GenericDevice_userId_fkey";

-- AlterTable
ALTER TABLE "CircuitBreaker" DROP COLUMN "userId",
ADD COLUMN     "userEmail" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "GenericDevice" DROP COLUMN "userId",
ADD COLUMN     "userEmail" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "GenericDevice" ADD CONSTRAINT "GenericDevice_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CircuitBreaker" ADD CONSTRAINT "CircuitBreaker_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
