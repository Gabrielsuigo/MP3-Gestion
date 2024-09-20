import { Request, Response } from "express"
import {cancelAppointmentService, createAppointmentService, getAppointmentsByidService, getAppointmentsService } from "../services/appointmentService";
import Appointment from "../entities/Appointment";

export const getAllapointments = async (req: Request, res: Response ) => {

    try {
        const appointment: Appointment[] = await getAppointmentsService();
        res.status(200).json(appointment)
        
    } catch (error: any) {
        res.status(400).json({error: error.message})
    }
}

export const getAppointmentsByid = async (req: Request, res: Response) => {
    try {
        const{id} = req.params;
        const appointment: Appointment = await getAppointmentsByidService( Number(id) );
        res.status(200).json(appointment)
  
    } catch (error: any) {
        res.status(404).json({error: error.message})
    }
}

export const schedule = async (req: Request, res: Response) => {
    try {
        const newAppointment = await createAppointmentService(req.body)
        res.status(201).json(newAppointment)
   
} catch (error: any) {
    res.status(404).json({error: error.message})
}
}

export const cancel = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const cancelAppointment = await cancelAppointmentService(Number(id))
        res.status(200).json({
            mensage: "Turno cancelado con éxito",
           AppointmentCanceled: cancelAppointment,
        });
    } catch (error: any) {
        res.status(404).json({error: error.message})
    }
};
        




        
        
    
   
