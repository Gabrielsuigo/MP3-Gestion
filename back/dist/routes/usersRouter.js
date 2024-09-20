"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
const usersRouter = (0, express_1.Router)();
// GET/users -> obtener el listado de todas las respuesta;
usersRouter.get("/", usersController_1.getAllUsers);
// GET/users/:Id -> obtener el detalle de un usuario especifico
usersRouter.get("/:id", usersController_1.getUserByid);
// POST/users/register -> registro de un nuevo usiario
usersRouter.post("/register", usersController_1.register);
// POST/users/login -> login del usuario a la aplicacion
usersRouter.post("/login", usersController_1.login);
exports.default = usersRouter;
