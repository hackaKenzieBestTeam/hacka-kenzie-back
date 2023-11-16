"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const c = __importStar(require("../controllers/users.controllers"));
const md = __importStar(require("../middlewares"));
const users_schemas_1 = require("../schemas/users.schemas");
const userRouter = (0, express_1.Router)();
userRouter.post('/register', md.validateRequestBodyMiddleware(users_schemas_1.createUserRequestSchema), md.verifyDuplicatedCpfEmailOrUsername, c.createUserController);
userRouter.post('/auth', md.validateRequestBodyMiddleware(users_schemas_1.loginUserRequestSchema), c.loginUserController);
userRouter.get('/profile', md.authenticationMiddleware, c.getUserController);
userRouter.patch('/update', md.authenticationMiddleware, md.validateRequestBodyMiddleware(users_schemas_1.updateUserRequestSchema), md.verifyDuplicatedCpfEmailOrUsername, c.updateUserController);
exports.default = userRouter;
