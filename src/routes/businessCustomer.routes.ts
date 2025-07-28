import express from "express";

import * as BusinessCustomerController from "../controllers/businessCustomer.controller";

const router = express.Router();

router.get("/", BusinessCustomerController.getAllBusinessCustomers);
router.post("/", BusinessCustomerController.createBusinessCustomer);

export default router;
