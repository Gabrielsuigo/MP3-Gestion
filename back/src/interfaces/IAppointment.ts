interface IAppointment {
    id: number;
    date: Date;
    time: string;
    status: "active" | "canceled";
    description: string;
    userId: number;
}


export default IAppointment