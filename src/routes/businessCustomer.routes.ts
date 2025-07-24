import express from "express";

import * as BusinessCustomerController from "../controllers/businessCustomer.controller";

const router = express.Router();

router.get(
  "/business-customers",
  BusinessCustomerController.getAllBusinessCustomers
);
router.post(
  "/business-customers",
  BusinessCustomerController.createBusinessCustomer
);

export default router;
