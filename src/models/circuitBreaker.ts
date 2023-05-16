import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("CircuitBreaker", {
    fields: t => ({
        id: t.exposeString("id"),
        name: t.exposeString("name"),
        ratedCurrent: t.exposeInt("ratedCurrent"),
        poleCount: t.exposeString("poleCount"),
        type: t.exposeString("type"),
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

builder.queryField("CircuitBreakers", (t) =>
    t.prismaField({
        type: ["CircuitBreaker"],
        resolve: async (query, root, args, ctx, info) => {
            return prisma.circuitBreaker.findMany({ ...query });
            
        }
    })
)

builder.mutationField("postCircuitBreaker", (t) =>
    t.prismaField({
        type: "CircuitBreaker",
        args: { 
            id: t.arg.string( {required: true}),
            name: t.arg.string({required: true}),
            ratedCurrent: t.arg.int({required: true}),
            poleCount: t.arg.string({required: true}),
            type: t.arg.string({required: true}),
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
            const post = await prisma.circuitBreaker.create({
                data: {
                    id: args.id,
                    name: args.name,
                    ratedCurrent: args.ratedCurrent,
                    slots: args.slots,
                    poleCount: args.poleCount,
                    type: args.type,
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

builder.mutationField("deleteCircuitBreaker", (t) =>
    t.prismaField({
        type: "CircuitBreaker",
        args: { 
            id: t.arg.string( {required: true}),


        },
        resolve: async (query, root, args, ctx, info) => {
            const post = await prisma.circuitBreaker.delete( {
                where: {
                    id: args.id
                }
            }
            );
            return post;
        }

    })
)

builder.mutationField("circuitVerification", (t) =>
    t.prismaField({
        type: "CircuitBreaker",
        args: {
            id: t.arg.string({required: true}),
            isVerified: t.arg.boolean({required: true})
        },
        resolve: (query, root, args) => 
        prisma.circuitBreaker.update({
            data: {
                isVerified: args.isVerified
            },
            where: { id: args.id}
        }),
    })
)