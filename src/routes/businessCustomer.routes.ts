import express from "express";

import * as BusinessCustomerController from "../controllers/businessCustomer.controller";

const router = express.Router();

router.get("/", BusinessCustomerController.getAllBusinessCustomers);
router.post("/", BusinessCustomerController.createBusinessCustomer);
router.get("/:id", BusinessCustomerController.getBusinessCustomerById);
router.put("/:id", BusinessCustomerController.updateBusinessCustomer);
router.delete("/:id", BusinessCustomerController.deleteBusinessCustomer);

export default router;
