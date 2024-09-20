import { appointmentModel, userModel } from "../config/dataSource";
import IAppointmentDto from "../Dtos/IAppointmentDto";
import Appointment from "../entities/Appointment";
import User from "../entities/User";


export const getAppointmentsService = async () => {
    const allAppointments: Appointment[] = await appointmentModel.find()
    return allAppointments 
}

export const getAppointmentsByidService = async (appointmentId: number) => {
    const foundAppointments: Appointment | undefined = await appointmentModel.findOneBy({id: appointmentId})
    if(!foundAppointments) throw Error ("el turno no fue encontrado");
        return foundAppointments;
}

export const createAppointmentService = async(createAppointmentDto: IAppointmentDto) => {
const newAppointment = await appointmentModel.create(createAppointmentDto)
await appointmentModel.save(newAppointment)

const user: User | null = await userModel.findOneBy({id: createAppointmentDto.userId})

newAppointment.user = user
await appointmentModel.save(newAppointment)
return newAppointment
}



export const cancelAppointmentService = async (id: number) =>{
    const appointment = await appointmentModel.findOneBy({id})

    if(!appointment) throw Error("turno inexistente")

   appointment.status = "canceled";
await appointmentModel.save(appointment)
return appointment
}

