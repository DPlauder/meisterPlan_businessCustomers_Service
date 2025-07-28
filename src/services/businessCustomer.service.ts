import { prisma } from "../db/client";

export const createBusinessCustomer = (data: any) => {
  return prisma.businessCustomer.create({ data });
};

export const getAllBusinessCustomers = () => {
  return prisma.businessCustomer.findMany();
};
