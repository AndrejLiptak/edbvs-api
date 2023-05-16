-- CreateTable
CREATE TABLE "RCD" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "poleCount" TEXT NOT NULL,
    "ratedResidualCurrent" DOUBLE PRECISION NOT NULL,
    "breakTimeType" TEXT NOT NULL,
    "currentType" TEXT NOT NULL,
    "slots" INTEGER NOT NULL,
    "inputs" INTEGER NOT NULL,
    "outputs" INTEGER NOT NULL,
    "powerLoss" DOUBLE PRECISION NOT NULL,
    "maxTemp" DOUBLE PRECISION NOT NULL,
    "userEmail" TEXT NOT NULL,

    CONSTRAINT "RCD_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RCD" ADD CONSTRAINT "RCD_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
