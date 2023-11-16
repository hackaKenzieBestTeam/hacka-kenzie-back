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
exports.updateUserService = void 0;
const entities_1 = require("../../entities");
const data_source_1 = __importDefault(require("../../data-source"));
const get_service_1 = require("./get.service");
const update_service_1 = require("../address/update.service");
const updateUserService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const usersRepo = data_source_1.default.getRepository(entities_1.User);
    let user = yield (0, get_service_1.getUserByIdOrThrowNewErrorService)(id);
    const address = yield (0, update_service_1.updateAddressService)(user.address.id, data.address);
    data.address = address;
    yield usersRepo.update(id, data);
    user = yield (0, get_service_1.getUserByIdOrThrowNewErrorService)(user.id);
    return user;
});
exports.updateUserService = updateUserService;
