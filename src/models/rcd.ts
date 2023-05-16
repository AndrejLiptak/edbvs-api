import { Prisma } from "@prisma/client";
import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("RCD", {
    fields: t => ({
        id: t.exposeString("id"),
        name: t.exposeString("name"),
        ratedCurrent: t.exposeInt("ratedCurrent"),
        ratedResidualCurrent: t.exposeFloat("ratedResidualCurrent"),
        poleCount: t.exposeString("poleCount"),
        currentType: t.exposeString("currentType"),
        breakTimeType: t.exposeString("breakTimeType"),
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

builder.queryField("RCDs", (t) =>
    t.prismaField({
        type: ["RCD"],
        resolve: async (query, root, args, ctx, info) => {
            return prisma.rCD.findMany({ ...query });
            
        }
    })
)

builder.mutationField("postRCD", (t) =>
    t.prismaField({
        type: "RCD",
        args: { 
            id: t.arg.string( {required: true}),
            name: t.arg.string({required: true}),
            ratedCurrent: t.arg.int({required: true}),
            ratedResidualCurrent: t.arg.float({required: true}),
            poleCount: t.arg.string({required: true}),
            currentType: t.arg.string({required: true}),
            breakTimeType: t.arg.string({required: true}),
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
            const post = await prisma.rCD.create({
                data: {
                    id: args.id,
                    name: args.name,
                    slots: args.slots,
                    breakTimeType: args.breakTimeType,
                    currentType: args.currentType,
                    poleCount: args.poleCount,
                    ratedCurrent: args.ratedCurrent,
                    ratedResidualCurrent: args.ratedResidualCurrent,
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

builder.mutationField("deleteRCD", (t) =>
    t.prismaField({
        type: "RCD",
        args: { 
            id: t.arg.string( {required: true}),


        },
        resolve: async (query, root, args, ctx, info) => {
            const post = await prisma.rCD.delete( {
                where: {
                    id: args.id
                }
            }
            );
            return post;
        }

    })
)

builder.mutationField("rcdVerification", (t) =>
    t.prismaField({
        type: "RCD",
        args: {
            id: t.arg.string({required: true}),
            isVerified: t.arg.boolean({required: true})
        },
        resolve: (query, root, args) => 
        prisma.rCD.update({
            data: {
                isVerified: args.isVerified
            },
            where: { id: args.id}
        }),
    })
)


