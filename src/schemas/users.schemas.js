"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserRequestSchema = exports.loginUserRequestSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const address_entity_1 = require("./address.entity");
exports.loginUserRequestSchema = zod_1.default.object({
    email: zod_1.default.string().email('Invalid email format.').optional(),
    username: zod_1.default.string().optional(),
    cpf: zod_1.default.string().optional(),
    password: zod_1.default.string()
});
exports.createUserRequestSchema = zod_1.default.object({
    username: zod_1.default.string(),
    first_name: zod_1.default.string(),
    last_name: zod_1.default.string(),
    email: zod_1.default.string().email('Invalid email format.').optional(),
    password: zod_1.default.string(),
    cpf: zod_1.default.string(),
    phone: zod_1.default.string(),
    birth_date: zod_1.default.date(),
    is_admin: zod_1.default.boolean().optional(),
    address: address_entity_1.createAddressRequestSchema
});
