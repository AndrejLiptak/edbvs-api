import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("CompanyRequest", {
  fields: (t) => ({
    userEmail: t.exposeString("userEmail"),
    approved: t.exposeBoolean("approved"),
    companyICO: t.exposeInt("companyICO"),
    companyName: t.exposeString("companyName"),
    rejected: t.exposeBoolean("rejected")
  }),
});

builder.queryField("CompanyRequests", (t) =>
  t.prismaField({
    type: ["CompanyRequest"],
    resolve: async (query, root, args, ctx, info) => {
      return prisma.companyRequest.findMany({ ...query });
    },
  })
);

builder.queryField("CompanyRequest", (t) =>
  t.prismaField({
    type: "CompanyRequest",
    nullable: true,
    args: {
      userEmail: t.arg.string({ required: true }),
    },
    resolve: (query, root, args) =>
      prisma.companyRequest.findUnique({
        ...query,
        where: { userEmail: args.userEmail },
      }),
  })
);

builder.mutationField("postCompanyRequest", (t) =>
  t.prismaField({
    type: "CompanyRequest",
    args: {
      userEmail: t.arg.string({ required: true }),
      companyName: t.arg.string({ required: true }),
      companyICO: t.arg.int({ required: true }),
    },
    resolve: async (query, root, args, ctx, info) => {
      const post = await prisma.companyRequest.create({
        data: {
          approved: false,
          userEmail: args.userEmail,
          companyICO: args.companyICO,
          companyName: args.companyName,
        },
      });
      return post;
    },
  })
);

builder.mutationField("companyApprove", (t) =>
  t.prismaField({
    type: "CompanyRequest",
    args: {
      userEmail: t.arg.string({ required: true }),
    },
    resolve: (query, root, args) =>
      prisma.companyRequest.update({
        data: {
          approved: true,
        },
        where: { userEmail: args.userEmail },
      }),
  })
);

builder.mutationField("companyReject", (t) =>
  t.prismaField({
    type: "CompanyRequest",
    args: {
      userEmail: t.arg.string({ required: true }),
    },
    resolve: (query, root, args) =>
      prisma.companyRequest.update({
        data: {
          rejected: true,
        },
        where: { userEmail: args.userEmail },
      }),
  })
);

builder.mutationField("companyUpdate", (t) =>
  t.prismaField({
    type: "CompanyRequest",
    args: {
      userEmail: t.arg.string({ required: true }),
      companyName: t.arg.string({ required: true }),
      companyICO: t.arg.int({ required: true }),
    },
    resolve: (query, root, args) =>
      prisma.companyRequest.update({
        data: {
          companyName: args.companyName,
          companyICO: args.companyICO,
          rejected: false
        },
        where: { userEmail: args.userEmail },
      }),
  })
);
