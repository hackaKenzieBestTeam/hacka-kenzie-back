"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAddressRequestSchema = exports.createAddressRequestSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createAddressRequestSchema = zod_1.default.object({
    zip_code: zod_1.default.string(),
    street: zod_1.default.string(),
    number: zod_1.default.number(),
    complement: zod_1.default.string(),
    district: zod_1.default.string(),
    city: zod_1.default.string(),
    state: zod_1.default.string(),
    country: zod_1.default.string()
});
exports.updateAddressRequestSchema = zod_1.default.object({
    zip_code: zod_1.default.string().optional(),
    street: zod_1.default.string().optional(),
    number: zod_1.default.number().optional(),
    complement: zod_1.default.string().optional(),
    district: zod_1.default.string().optional(),
    city: zod_1.default.string().optional(),
    state: zod_1.default.string().optional(),
    country: zod_1.default.string().optional()
});
