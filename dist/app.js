"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const handleError_middleware_1 = __importDefault(require("./middlewares/handleError.middleware"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use('/users', users_routes_1.default);
exports.app.use(handleError_middleware_1.default);
