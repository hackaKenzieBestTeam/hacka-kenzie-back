"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserController = exports.getUserController = exports.createUserController = void 0;
const users_1 = require("../services/users");
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const newUser = yield (0, users_1.createUserService)(data);
    return res.status(201).json(newUser);
});
exports.createUserController = createUserController;
const getUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    const user = yield (0, users_1.getUserByIdOrThrowNewErrorService)(id);
    return res.status(200).json(user);
});
exports.getUserController = getUserController;
const loginUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const token = yield (0, users_1.loginUserService)(data);
    return res.status(200).json(token);
});
exports.loginUserController = loginUserController;
