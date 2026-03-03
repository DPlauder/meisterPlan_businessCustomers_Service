"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBusinessCustomer = exports.updateBusinessCustomer = exports.getBusinessCustomerById = exports.getAllBusinessCustomers = exports.createBusinessCustomer = void 0;
const client_1 = require("../db/client");
const createBusinessCustomer = (data) => {
    return client_1.prisma.businessCustomer.create({ data });
};
exports.createBusinessCustomer = createBusinessCustomer;
const getAllBusinessCustomers = () => {
    return client_1.prisma.businessCustomer.findMany();
};
exports.getAllBusinessCustomers = getAllBusinessCustomers;
const getBusinessCustomerById = (id) => {
    return client_1.prisma.businessCustomer.findUnique({
        where: { id },
    });
};
exports.getBusinessCustomerById = getBusinessCustomerById;
const updateBusinessCustomer = (id, data) => {
    return client_1.prisma.businessCustomer.update({
        where: { id },
        data,
    });
};
exports.updateBusinessCustomer = updateBusinessCustomer;
const deleteBusinessCustomer = (id) => {
    console.log("Deleting business customer with ID:", id);
    return client_1.prisma.businessCustomer.delete({
        where: { id },
    });
};
exports.deleteBusinessCustomer = deleteBusinessCustomer;
