-- CreateTable
CREATE TABLE "GenericDevice" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slots" INTEGER NOT NULL,
    "inputs" INTEGER NOT NULL,
    "outputs" INTEGER NOT NULL,
    "powerLoss" DOUBLE PRECISION NOT NULL,
    "maxTemp" DOUBLE PRECISION NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "GenericDevice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "GenericDevice" ADD CONSTRAINT "GenericDevice_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
