import axios from "axios";
import style from "./Appointment.module.css"
import { useDispatch } from "react-redux";
import { cancelAppointmentAction } from "../../redux/reducer";

const Appointment = ({ date, time, status, id, description }) => {
  const dispatch = useDispatch()
  const cancelAppointment = async () => {
try {
   const response = await axios.put(`http://localhost:3000/appointments/cancel/${id}`)
   dispatch(cancelAppointmentAction(id))
} catch (error) {
  console.error ("Ocurrio un error en el servidor", error)
  
}

  }
  return (
    <div className={style.card}>
      <p>{date}</p>
      <p>{time}</p>
      <p>{description}</p>
      <p>{status?.toUpperCase()}</p>
      <button disabled ={ status === "cancelled"} onClick={() => cancelAppointment()}>Cancelar</button>
    </div>
  );
};

export default Appointment;
