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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const t = __importStar(require("typeorm"));
const class_transformer_1 = require("class-transformer");
const address_entity_1 = require("./address.entity");
let User = class User {
};
exports.User = User;
__decorate([
    t.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    t.Column({ length: 50 }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    t.Column({ length: 50 }),
    __metadata("design:type", String)
], User.prototype, "first_name", void 0);
__decorate([
    t.Column({ length: 50 }),
    __metadata("design:type", String)
], User.prototype, "last_name", void 0);
__decorate([
    t.Column({ length: 100 }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    t.Column({ length: 150 }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    t.Column({ length: 11 }),
    __metadata("design:type", String)
], User.prototype, "cpf", void 0);
__decorate([
    t.Column({ length: 14 }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    t.Column(),
    __metadata("design:type", Date)
], User.prototype, "birth_date", void 0);
__decorate([
    t.Column({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "is_admin", void 0);
__decorate([
    t.CreateDateColumn(),
    __metadata("design:type", Date)
], User.prototype, "created_at", void 0);
__decorate([
    t.UpdateDateColumn(),
    __metadata("design:type", Date)
], User.prototype, "updated_at", void 0);
__decorate([
    t.ManyToOne(() => address_entity_1.Address, (address) => address.users, {
        eager: true,
        cascade: true
    }),
    __metadata("design:type", address_entity_1.Address)
], User.prototype, "address", void 0);
exports.User = User = __decorate([
    t.Entity('users')
], User);
