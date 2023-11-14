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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserService = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const appError_1 = require("../../errors/appError");
const entities_1 = require("../../entities");
const loginUserService = ({ email, username, cpf, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepo = data_source_1.default.getRepository(entities_1.User);
    const user = yield userRepo.findOneBy({ email } || { username } || { cpf });
    if (!user)
        throw new appError_1.AppError('Invalid Data', 403);
    const passwordMatch = yield (0, bcrypt_1.compare)(password, user.password);
    if (!passwordMatch)
        throw new appError_1.AppError('Invalid Data', 403);
    const token = jsonwebtoken_1.default.sign({}, String(process.env.SECRET_KEY), {
        expiresIn: '12h',
        subject: user.id
    });
    return { token: token };
});
exports.loginUserService = loginUserService;
