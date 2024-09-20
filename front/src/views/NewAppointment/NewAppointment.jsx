import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isValidTime, isWeekDay } from "../../helpers/validate";
import axios from "axios";

const NewAppointment = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userActive);

  const initialState = {
    date: "",
    time: "",
    description: "",
  };

  const [form, setForm] = useState(initialState);

  const [errors, setErrors] = useState(initialState);

  // MONTAJE
  useEffect(() => {
    !userData.name && navigate("/");
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const postData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/appointments/schedule",
        {
          date: form.date,
          time: form.time,
          description: form.description,
          userId: userData.id,
        }
      );

      if (response.status === 201) {
        alert("El turno se ha solicitado");
        navigate("/appointments");
      } else {
        alert("El turno no se ha podido solicitar");
      }
    } catch (error) {
      console.error("Error en el servidor", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    postData();
  };

  useEffect(() => {
    if (form.date && !isWeekDay(form.date)) {
      setErrors({
        ...errors,
        date: "seleccione un dia entre lunes y viernes.",
      });
    } else if (form.time && !isValidTime(form.time)) {
      setErrors({
        ...errors,
        time: "seleccione una hora entre las 08:00AM y 17:00PM",
      });
    } else {
      setErrors({ ...errors, time: "", date: "" });
    }
  }, [form]);

  return (
    <div>
      <h2>Solicitud de turno</h2>
      <form onSubmit={handleSubmit}>
        {[
          {
            label: "Fecha:",
            name: "date",
            type: "date",
          },
          {
            label: "Hora:",
            name: "time",
            type: "time",
          },
          {
            label: "Descripción",
            name: "description",
            type: "text",
          },
        ].map(({ label, name, type }) => {
          return (
            <div key={name}>
              <label>{label}</label>
              <input
                value={form[name]}
                name={name}
                type={type}
                onChange={handleChange}
              />
              {errors[name] && <span>{errors[name]}</span>}
            </div>
          );
        })}

        <button type="submit" disabled={errors.date || errors.time}>
          Solicitar turno
        </button>
      </form>
    </div>
  );
};
export default NewAppointment;
