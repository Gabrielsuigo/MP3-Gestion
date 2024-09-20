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
exports.findUserByCredentialId = exports.createUserService = exports.getUserByIdService = exports.getAllUsersService = void 0;
const credentialServices_1 = require("./credentialServices");
const dataSource_1 = require("../config/dataSource");
const getAllUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield dataSource_1.userModel.find();
    return allUsers;
});
exports.getAllUsersService = getAllUsersService;
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield dataSource_1.userModel.findOne({ where: { id }, relations: ["appointments"] });
    if (!foundUser)
        throw Error("Usuario no encontrado");
    return foundUser;
});
exports.getUserByIdService = getUserByIdService;
const createUserService = (createUserDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield dataSource_1.userModel.create(createUserDto);
    yield dataSource_1.userModel.save(newUser);
    const newCredential = yield (0, credentialServices_1.createCredential)({
        username: createUserDto.username,
        password: createUserDto.password
    });
    newUser.credential = newCredential;
    dataSource_1.userModel.save(newUser);
    return newUser;
});
exports.createUserService = createUserService;
const findUserByCredentialId = (credentialID) => __awaiter(void 0, void 0, void 0, function* () {
    const userFound = yield dataSource_1.userModel.findOneBy({ credential: { id: credentialID } });
    return userFound;
});
exports.findUserByCredentialId = findUserByCredentialId;
