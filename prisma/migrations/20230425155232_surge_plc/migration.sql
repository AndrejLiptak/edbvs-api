-- CreateTable
CREATE TABLE "SurgeProtector" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "slots" INTEGER NOT NULL,
    "inputs" INTEGER NOT NULL,
    "outputs" INTEGER NOT NULL,
    "powerLoss" DOUBLE PRECISION NOT NULL,
    "maxTemp" DOUBLE PRECISION NOT NULL,
    "userEmail" TEXT NOT NULL,

    CONSTRAINT "SurgeProtector_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PLC" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slots" INTEGER NOT NULL,
    "inputs" INTEGER NOT NULL,
    "outputs" INTEGER NOT NULL,
    "powerLoss" DOUBLE PRECISION NOT NULL,
    "maxTemp" DOUBLE PRECISION NOT NULL,
    "userEmail" TEXT NOT NULL,

    CONSTRAINT "PLC_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SurgeProtector" ADD CONSTRAINT "SurgeProtector_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PLC" ADD CONSTRAINT "PLC_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
