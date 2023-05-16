import { Prisma } from "@prisma/client";
import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("Enclosure", {
    fields: t => ({
        id: t.exposeString("id"),
        name: t.exposeString("name"),
        totalSlots: t.exposeInt("totalSlots"),
        totalDIN: t.exposeInt("totalDIN"),
        oneDINSlots: t.exposeInt("oneDINSlots"),
        heatDissipation: t.exposeFloat("heatDissipation"),
        userEmail: t.exposeString("userEmail"),
        isVerified: t.exposeBoolean("isVerified"),
        link: t.exposeString("link", {nullable: true})
        

    })
});

builder.queryField("Enclosures", (t) =>
    t.prismaField({
        type: ["Enclosure"],
        resolve: async (query, root, args, ctx, info) => {
            return prisma.enclosure.findMany({ ...query });
            
        }
    })
)

builder.mutationField("postEnclosure", (t) =>
    t.prismaField({
        type: "Enclosure",
        args: { 
            id: t.arg.string( {required: true}),
            name: t.arg.string({required: true}),
            totalSlots: t.arg.int({required: true}),
            totalDIN: t.arg.int({required: true}),
            oneDINSlots: t.arg.int({required: true}),
            heatDissipation: t.arg.float({required: true}),
            userEmail: t.arg.string({required: true}),
            isVerified: t.arg.boolean({required: true}),
            link: t.arg.string({required: false})

        },
        resolve: async (query, root, args, ctx, info) => {
            const post = await prisma.enclosure.create({
                data: {
                    id: args.id,
                    name: args.name,
                    totalSlots: args.totalSlots,
                    totalDIN: args.totalDIN,
                    oneDINSlots: args.oneDINSlots,
                    heatDissipation: args.heatDissipation,
                    userEmail: args.userEmail,
                    isVerified: args.isVerified,
                    link: args.link
                }
            });
            return post;
        }

    })
)

builder.mutationField("deleteEnclosure", (t) =>
    t.prismaField({
        type: "Enclosure",
        args: { 
            id: t.arg.string( {required: true}),


        },
        resolve: async (query, root, args, ctx, info) => {
            const post = await prisma.enclosure.delete( {
                where: {
                    id: args.id
                }
            }
            );
            return post;
        }

    })
)

builder.mutationField("enclosureVerification", (t) =>
    t.prismaField({
        type: "Enclosure",
        args: {
            id: t.arg.string({required: true}),
            isVerified: t.arg.boolean({required: true})
        },
        resolve: (query, root, args) => 
        prisma.enclosure.update({
            data: {
                isVerified: args.isVerified
            },
            where: { id: args.id}
        }),
    })
)