import { Prisma } from "@prisma/client";
import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("GenericDevice", {
    fields: t => ({
        id: t.exposeString("id"),
        name: t.exposeString("name"),
        slots: t.exposeInt("slots"),
        inputs: t.exposeInt("inputs"),
        outputs: t.exposeInt("outputs"),
        powerLoss: t.exposeFloat("powerLoss"),
        maxTemp: t.exposeFloat("maxTemp"),
        userEmail: t.exposeString("userEmail"),
        isVerified: t.exposeBoolean("isVerified"),
        link: t.exposeString("link", {nullable: true})
        

    })
});

builder.queryField("GenericDevices", (t) =>
    t.prismaField({
        type: ["GenericDevice"],
        resolve: async (query, root, args, ctx, info) => {
            return prisma.genericDevice.findMany({ ...query });
            
        }
    })
)

builder.mutationField("postGenericDevice", (t) =>
    t.prismaField({
        type: "GenericDevice",
        args: { 
            id: t.arg.string( {required: true}),
            name: t.arg.string({required: true}),
            slots: t.arg.int({required: true}),
            inputs: t.arg.int({required: true}),
            outputs: t.arg.int({required: true}),
            powerLoss: t.arg.float({required: true}),
            maxTemp: t.arg.float({required: true}),
            userEmail: t.arg.string({required: true}),
            isVerified: t.arg.boolean({required: true}),
            link: t.arg.string({required: false})

        },
        resolve: async (query, root, args, ctx, info) => {
            const post = await prisma.genericDevice.create({
                data: {
                    id: args.id,
                    name: args.name,
                    slots: args.slots,
                    inputs: args.inputs,
                    outputs: args.outputs,
                    powerLoss: args.powerLoss,
                    maxTemp: args.maxTemp,
                    userEmail: args.userEmail,
                    isVerified: args.isVerified,
                    link: args.link
                }
            });
            return post;
        }

    })
)

builder.mutationField("deleteGenericDevice", (t) =>
    t.prismaField({
        type: "GenericDevice",
        args: { 
            id: t.arg.string( {required: true}),


        },
        resolve: async (query, root, args, ctx, info) => {
            const post = await prisma.genericDevice.delete( {
                where: {
                    id: args.id
                }
            }
            );
            return post;
        }

    })
)


builder.mutationField("genericVerification", (t) =>
    t.prismaField({
        type: "GenericDevice",
        args: {
            id: t.arg.string({required: true}),
            isVerified: t.arg.boolean({required: true})
        },
        resolve: (query, root, args) => 
        prisma.genericDevice.update({
            data: {
                isVerified: args.isVerified
            },
            where: { id: args.id}
        }),
    })
)