"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBusinessCustomers = exports.createBusinessCustomer = void 0;
const client_1 = require("../db/client");
const createBusinessCustomer = (data) => {
    return client_1.prisma.businessCustomer.create({ data });
};
exports.createBusinessCustomer = createBusinessCustomer;
const getAllBusinessCustomers = () => {
    return client_1.prisma.businessCustomer.findMany();
};
exports.getAllBusinessCustomers = getAllBusinessCustomers;
