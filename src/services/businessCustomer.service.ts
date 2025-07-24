import { prisma } from "../db/client";

export const createBusinessCustomer = (data: any) => {
  return prisma.customer.create({ data });
};

export const getAllBusinessCustomers = (id: string) => {
  return prisma.customer.findUnique({
    where: { id },
  });
};
