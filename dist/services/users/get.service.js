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
exports.getUserByIdOrThrowNewErrorService = exports.getUserByIdService = void 0;
const class_transformer_1 = require("class-transformer");
const data_source_1 = __importDefault(require("../../data-source"));
const entities_1 = require("../../entities");
const appError_1 = require("../../errors/appError");
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepo = data_source_1.default.getRepository(entities_1.User);
    const user = yield userRepo.findOneBy({ id: id });
    return user;
});
exports.getUserByIdService = getUserByIdService;
const getUserByIdOrThrowNewErrorService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield (0, exports.getUserByIdService)(id);
    if (!user)
        throw new appError_1.AppError('User not found', 404);
    user = (0, class_transformer_1.instanceToPlain)(user);
    return user;
});
exports.getUserByIdOrThrowNewErrorService = getUserByIdOrThrowNewErrorService;
