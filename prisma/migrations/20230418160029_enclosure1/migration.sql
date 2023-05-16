-- CreateTable
CREATE TABLE "Enclosure" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "heatDissipation" DOUBLE PRECISION NOT NULL,
    "totalSlots" INTEGER NOT NULL,
    "totalDIN" INTEGER NOT NULL,
    "oneDINSlots" INTEGER NOT NULL,

    CONSTRAINT "Enclosure_pkey" PRIMARY KEY ("id")
);
