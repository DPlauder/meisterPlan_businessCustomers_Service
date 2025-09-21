import e, { Request, Response } from "express";
import * as BusinessCustomerService from "../services/businessCustomer.service";

export const createBusinessCustomer = async (
  req: Request,
  res: Response
): Promise<void> => {
  const businessCustomer = await BusinessCustomerService.createBusinessCustomer(
    req.body
  );
  res.status(201).json(businessCustomer);
};
export const getAllBusinessCustomers = async (
  req: Request,
  res: Response
): Promise<void> => {
  const businessCustomer =
    await BusinessCustomerService.getAllBusinessCustomers();
  console.log("Business Customer:", businessCustomer);
  if (!businessCustomer) {
    res.status(404).send("Business customer not found");
    return;
  }
  res.status(200).json(businessCustomer);
};
export const getBusinessCustomerById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const businessCustomer =
    await BusinessCustomerService.getBusinessCustomerById(id);
  if (!businessCustomer) {
    res.status(404).send("Business customer not found");
    return;
  }
  res.status(200).json(businessCustomer);
};
export const updateBusinessCustomer = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const updatedBusinessCustomer =
    await BusinessCustomerService.updateBusinessCustomer(id, req.body);
  if (!updatedBusinessCustomer) {
    res.status(404).send("Business customer not found");
    return;
  }
  res.status(200).json(updatedBusinessCustomer);
};
export const deleteBusinessCustomer = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  await BusinessCustomerService.deleteBusinessCustomer(id);
  res
    .status(200)
    .json({ success: true, message: "Business customer deleted successfully" });
};
