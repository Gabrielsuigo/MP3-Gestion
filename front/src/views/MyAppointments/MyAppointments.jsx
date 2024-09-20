import { useEffect, useState } from "react";
import Appointment from "../../components/Appointment/Appointment";
import style from "./MyAppointments.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUserAppointments } from "../../redux/reducer";

const MyAppointments = () => {
  const navigate = useNavigate();
  // const [userAppointments, setAppointments] = useState([]);
  // const [estado, establecer estado] = useState (valor inicial)
  // const [STATE, SETSTATE] = useState (INITIALVALUE)
  const userData = useSelector((state) => state.userActive);
  const userAppointments = useSelector((state) => state.userAppointment);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/users/${userData.id}`
      );
      dispatch(addUserAppointments(response.data.appointments));
      //  setAppointments(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  // MONTAJE
  useEffect(() => {
    !userData.name ? navigate("/") : fetchData();
  }, []);

  // // ACTUALIZACIÓN
  // useEffect(() => {

  // }, [userAppointments])

  // // DESMONTAJE
  // useEffect(() => {

  //   return() =>{

  //   }

  // }, [])

  return (
    <div className={style.container}>
      <h3>Mis turnos</h3>
      <Link to="/newAppointment">New Appointment</Link>

      {userAppointments.length ? (
        userAppointments?.map(({ time, date, status, id, description }) => {
          return (
            <div className={style.container}>
              <Appointment
                key={id}
                date={date}
                time={time}
                status={status}
                id={id}
                description={description}
              />
            </div>
          );
        })
      ) : (
        <div>No tienes ningun turno</div>
      )}
    </div>
  );
};

export default MyAppointments;
