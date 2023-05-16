import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.genericDevice.deleteMany({});
    await prisma.user.deleteMany({});

    await prisma.user.create({
        data: {
            email: "admin@admin.com",
            name: "admin",
            isVerified: true,
            genericDevices: {
                create: [
                    {
                        id: "GD01",
                        name: "Generic Device Number 1",
                        slots: 1,
                        inputs: 1,
                        outputs: 1,
                        powerLoss: 5.5,
                        maxTemp: 55.5
                    },
                    {
                        id: "GD02",
                        name: "Generic Device Number 2",
                        slots: 2,
                        inputs: 2,
                        outputs: 2,
                        powerLoss: 10,
                        maxTemp: 40
                    },
                    {
                        id: "GD03",
                        name: "Generic Device Number 3",
                        slots: 3,
                        inputs: 3,
                        outputs: 3,
                        powerLoss: 20,
                        maxTemp: 45
                    }
                ]
            }
        }
    })
    
}

main().then(() => console.log("Data seeded"));