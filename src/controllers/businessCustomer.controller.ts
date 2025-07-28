import { Request, Response } from "express";
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
