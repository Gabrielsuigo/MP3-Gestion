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
exports.validateCredential = exports.createCredential = void 0;
const dataSource_1 = require("../config/dataSource");
const createCredential = (credentialDTO) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredential = yield dataSource_1.credetialModel.create(credentialDTO);
    yield dataSource_1.credetialModel.save(newCredential);
    return newCredential;
});
exports.createCredential = createCredential;
const validateCredential = (credentialDTO) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = credentialDTO;
    const foundCredential = yield dataSource_1.credetialModel.findOneBy({ username: username });
    if (!foundCredential) {
        throw Error("credeciales incorrectas");
    }
    else if (foundCredential && foundCredential.username !== username) {
        throw Error("usuario incorrecto");
    }
    else if (foundCredential && foundCredential.password !== password) {
        throw Error("password incorreto");
    }
    else {
        return foundCredential;
    }
});
exports.validateCredential = validateCredential;
