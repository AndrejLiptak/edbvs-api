import { Prisma } from "@prisma/client";
import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("PLC", {
    fields: t => ({
        id: t.exposeString("id"),
        name: t.exposeString("name"),
        slots: t.exposeInt("slots"),
        inputs: t.exposeInt("inputs"),
        outputs: t.exposeInt("outputs"),
        digitalIn: t.exposeInt("digitalIn"),
        digitalOut: t.exposeInt("digitalOut"),
        analogIn: t.exposeInt("analogIn"),
        analogOut: t.exposeInt("analogOut"),
        powerLoss: t.exposeFloat("powerLoss"),
        maxTemp: t.exposeFloat("maxTemp"),
        userEmail: t.exposeString("userEmail"),
        isVerified: t.exposeBoolean("isVerified"),
        link: t.exposeString("link", {nullable: true})

    })
});

builder.queryField("PLCs", (t) =>
    t.prismaField({
        type: ["PLC"],
        resolve: async (query, root, args, ctx, info) => {
            return prisma.pLC.findMany({ ...query });
            
        }
    })
)

builder.mutationField("postPLC", (t) =>
    t.prismaField({
        type: "PLC",
        args: { 
            id: t.arg.string( {required: true}),
            name: t.arg.string({required: true}),
            slots: t.arg.int({required: true}),
            inputs: t.arg.int({required: true}),
            outputs: t.arg.int({required: true}),
            digitalIn: t.arg.int({required: true}),
            digitalOut: t.arg.int({required: true}),
            analogIn: t.arg.int({required: true}),
            analogOut: t.arg.int({required: true}),
            powerLoss: t.arg.float({required: true}),
            maxTemp: t.arg.float({required: true}),
            userEmail: t.arg.string({required: true}),
            isVerified: t.arg.boolean({required: true}),
            link: t.arg.string({required: false})
            

        },
        resolve: async (query, root, args, ctx, info) => {
            const post = await prisma.pLC.create({
                data: {
                    id: args.id,
                    name: args.name,
                    slots: args.slots,
                    inputs: args.inputs,
                    outputs: args.outputs,
                    digitalIn: args.digitalIn,
                    digitalOut: args.digitalOut,
                    analogIn: args.analogIn,
                    analogOut: args.analogOut,
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

builder.mutationField("deletePLC", (t) =>
    t.prismaField({
        type: "PLC",
        args: { 
            id: t.arg.string( {required: true}),


        },
        resolve: async (query, root, args, ctx, info) => {
            const post = await prisma.pLC.delete( {
                where: {
                    id: args.id
                }
            }
            );
            return post;
        }

    })
)

builder.mutationField("plcVerification", (t) =>
    t.prismaField({
        type: "PLC",
        args: {
            id: t.arg.string({required: true}),
            isVerified: t.arg.boolean({required: true})
        },
        resolve: (query, root, args) => 
        prisma.pLC.update({
            data: {
                isVerified: args.isVerified
            },
            where: { id: args.id}
        }),
    })
)


