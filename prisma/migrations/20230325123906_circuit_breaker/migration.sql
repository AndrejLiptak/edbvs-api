-- CreateTable
CREATE TABLE "CircuitBreaker" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "poleCount" INTEGER NOT NULL,
    "ratedCurrent" INTEGER NOT NULL,
    "slots" INTEGER NOT NULL,
    "inputs" INTEGER NOT NULL,
    "outputs" INTEGER NOT NULL,
    "powerLoss" DOUBLE PRECISION NOT NULL,
    "maxTemp" DOUBLE PRECISION NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "CircuitBreaker_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CircuitBreaker" ADD CONSTRAINT "CircuitBreaker_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
