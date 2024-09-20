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
exports.cancelAppointmentService = exports.createAppointmentService = exports.getAppointmentsByidService = exports.getAppointmentsService = void 0;
const dataSource_1 = require("../config/dataSource");
const getAppointmentsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const allAppointments = yield dataSource_1.appointmentModel.find();
    return allAppointments;
});
exports.getAppointmentsService = getAppointmentsService;
const getAppointmentsByidService = (appointmentID) => __awaiter(void 0, void 0, void 0, function* () {
    const foundAppointments = yield dataSource_1.appointmentModel.findOneBy({ id: appointmentID });
    if (!foundAppointments)
        throw Error("el turno no fue encontrado");
    return foundAppointments;
});
exports.getAppointmentsByidService = getAppointmentsByidService;
const createAppointmentService = (createAppointmentDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newAppointment = yield dataSource_1.appointmentModel.create(createAppointmentDto);
    yield dataSource_1.appointmentModel.save(newAppointment);
    const user = yield dataSource_1.userModel.findOneBy({ id: createAppointmentDto.userId });
    newAppointment.user = user;
    yield dataSource_1.appointmentModel.save(newAppointment);
    return newAppointment;
});
exports.createAppointmentService = createAppointmentService;
const cancelAppointmentService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield dataSource_1.appointmentModel.findOneBy({ id });
    if (!appointment)
        throw Error("turno inexistente");
    appointment.status = "canceled";
    yield dataSource_1.appointmentModel.save(appointment);
    return appointment;
});
exports.cancelAppointmentService = cancelAppointmentService;
