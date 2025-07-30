import { prisma } from "../db/client";

export const createBusinessCustomer = (data: any) => {
  return prisma.businessCustomer.create({ data });
};

export const getAllBusinessCustomers = () => {
  return prisma.businessCustomer.findMany();
};
export const getBusinessCustomerById = (id: string) => {
  return prisma.businessCustomer.findUnique({
    where: { id },
  });
};
export const updateBusinessCustomer = (id: string, data: any) => {
  return prisma.businessCustomer.update({
    where: { id },
    data,
  });
};
export const deleteBusinessCustomer = (id: string) => {
  console.log("Deleting business customer with ID:", id);
  //return prisma.businessCustomer.delete({
  //where: { id },
  //});
};
