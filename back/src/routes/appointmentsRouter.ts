import { Router } from "express";
import { cancel, getAllapointments, getAppointmentsByid, schedule } from "../controllers/appointmentsController";

const appointmentsRouter: Router = Router();

// GET/appointments -> obtener listado de todod los turnos de todo los usuarios.
appointmentsRouter.get("/", getAllapointments )

// GET/appointments -> obtener el detalle de un turno especifico.
appointmentsRouter.get("/:id", getAppointmentsByid )

// POST/appointmens/schedule -> agregar un nuevo turno.
appointmentsRouter.post("/schedule", schedule)

// PUT/appointmnets/cancel -> cambiar el estatus de un turno a "cancelled".
appointmentsRouter.put("/cancel/:id", cancel)


export default appointmentsRouter;


