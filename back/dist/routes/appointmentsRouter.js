"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentsController_1 = require("../controllers/appointmentsController");
const appointmentsRouter = (0, express_1.Router)();
// GET/appointments -> obtener listado de todod los turnos de todo los usuarios.
appointmentsRouter.get("/", appointmentsController_1.getAllapointments);
// GET/appointments -> obtener el detalle de un turno especifico.
appointmentsRouter.get("/:id", appointmentsController_1.getAppointmentsByid);
// POST/appointmens/schedule -> agregar un nuevo turno.
appointmentsRouter.post("/schedule", appointmentsController_1.schedule);
// PUT/appointmnets/cancel -> cambiar el estatus de un turno a "cancelled".
appointmentsRouter.put("/cancel/:id", appointmentsController_1.cancel);
exports.default = appointmentsRouter;
