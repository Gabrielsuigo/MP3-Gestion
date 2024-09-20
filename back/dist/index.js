"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const envs_1 = require("./config/envs");
const server_1 = __importDefault(require("./server"));
const dataSource_1 = require("./config/dataSource");
dataSource_1.AppDataSource.initialize()
    .then(() => {
    console.log("Database connected");
    server_1.default.listen(envs_1.PORT, () => {
        console.log("server listing on", envs_1.PORT);
    });
})
    .catch((error) => console.log(error));
