import { emit } from "process";
import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("User", {
    fields: t => ({
        name: t.exposeString("name"),
        email: t.exposeString("email"),
        isVerified: t.exposeBoolean("isVerified", {nullable: true}),
        isCompany: t.exposeBoolean("isCopmany"),
        companyName: t.exposeString("companyName", {nullable: true}),
        companyICO: t.exposeInt("companyICO", {nullable: true}),
        genericDevices: t.relation("genericDevices"),
        circuitBreakers: t.relation("circuitBreakers"),
        RCDs: t.relation("rcds"),
        surgeProtectors: t.relation("surgeProtectors"),
        PLCs: t.relation("plcs"),
        enclosures: t.relation("enclosures"),
        approval: t.relation( "companyRequest", {nullable: true})
    })
});

builder.queryField("Users", (t) =>
    t.prismaField({
        type: ["User"],
        resolve: async (query, root, args, ctx, info) => {
            return prisma.user.findMany({ ...query });
            
        }
    })
)

builder.queryField("User", (t) =>
    t.prismaField({
        type: 'User',
        nullable: true,
        args: {
          email: t.arg.string({ required: true }),
        },
        resolve: (query, root, args) =>
          prisma.user.findUnique({
            ...query,
            where: { email: args.email },
          }),
            
        
    })
)

builder.mutationField("postUser", (t) =>
    t.prismaField({
        type: "User",
        args: { 
            name: t.arg.string({required: true}),
            email: t.arg.string({required: true}),


        },
        resolve: async (query, root, args, ctx, info) => {
            const post = await prisma.user.create({
                data: {
                    name: args.name,
                    email: args.email,
                    isVerified: false
                }
            });
            return post;
        }

    })
)

builder.mutationField("userVerification", (t) =>
    t.prismaField({
        type: "User",
        args: {
            email: t.arg.string({required: true}),
            isVerified: t.arg.boolean({required: true})
        },
        resolve: (query, root, args) => 
        prisma.user.update({
            data: {
                isVerified: args.isVerified
            },
            where: { email: args.email}
        }),
    })
)

builder.mutationField("userCompany", (t) =>
    t.prismaField({
        type: "User",
        args: {
            email: t.arg.string({required: true}),
            isCompany: t.arg.boolean({required: true}),
            companyName: t.arg.string({required: true}),
            companyICO: t.arg.int({required: true}),

        },
        resolve: (query, root, args) => 
        prisma.user.update({
            data: {
                isCopmany: args.isCompany,
                isVerified: true,
                companyName: args.companyName,
                companyICO: args.companyICO,
            },
            where: { email: args.email}
        }),
    })
)