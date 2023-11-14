"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = require("./app");
const data_source_1 = __importDefault(require("./data-source"));
data_source_1.default.initialize()
    .then(() => {
    console.log('Database Conected');
    const PORT = Number(process.env.PORT) || 3000;
    app_1.app.listen(PORT, () => console.log(`app is running at port ${PORT}`));
})
    .catch((error) => console.log(error));
