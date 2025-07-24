import { prisma } from "../db/client";

export const createBusinessCustomer = (data: any) => {
  return prisma.businessCustomer.create({ data });
};

export const getAllBusinessCustomers = (id: string) => {
  return prisma.businessCustomer.findUnique({
    where: { id },
  });
};
