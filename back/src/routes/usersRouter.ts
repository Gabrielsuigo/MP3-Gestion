import { Router } from "express";
import { getAllUsers, getUserByid, login, register } from "../controllers/usersController";

const usersRouter: Router = Router();

// GET/users -> obtener el listado de todas las respuesta;
usersRouter.get("/", getAllUsers)

// GET/users/:Id -> obtener el detalle de un usuario especifico
usersRouter.get("/:id", getUserByid)

// POST/users/register -> registro de un nuevo usiario
usersRouter.post("/register", register)

// POST/users/login -> login del usuario a la aplicacion
usersRouter.post("/login", login)

export default usersRouter;