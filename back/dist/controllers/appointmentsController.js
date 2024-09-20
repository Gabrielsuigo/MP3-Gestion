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
exports.cancel = exports.schedule = exports.getAppointmentsByid = exports.getAllapointments = void 0;
const appointmentService_1 = require("../services/appointmentService");
const getAllapointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointment = yield (0, appointmentService_1.getAppointmentsService)();
        res.status(200).json(appointment);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getAllapointments = getAllapointments;
const getAppointmentsByid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const appointment = yield (0, appointmentService_1.getAppointmentsByidService)(Number(id));
        res.status(200).json(appointment);
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
});
exports.getAppointmentsByid = getAppointmentsByid;
const schedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newAppointment = yield (0, appointmentService_1.createAppointmentService)(req.body);
        res.status(201).json(newAppointment);
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
});
exports.schedule = schedule;
const cancel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const cancelAppointment = yield (0, appointmentService_1.cancelAppointmentService)(Number(id));
        res.status(200).json({
            mensage: "Turno cancelado con éxito",
            AppointmentCanceled: cancelAppointment,
        });
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
});
exports.cancel = cancel;
