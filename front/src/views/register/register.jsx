
import React, { useEffect, useState } from "react";
import { validateRegister } from "../../helpers/validate";
import axios from "axios";
import styles from "./register.module.css";

const register = () => {
  const initialState = {
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
  };
  const [form, setform] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  useEffect(() => {
    const errors = validateRegister(form);
    setErrors(errors);
  }, [form]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setform({ ...form, [name]: value });
  };

  const postData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users/register",
        form
      );
      if (response.status === 201) {
        alert("Usuario registrado con Éxito");
      } else {
        alert("Falló al registrar al usuario");
      }
      setform(initialState);
    } catch (error) {
      console.log("Error al servidor", error);
      alert("Fallo al registrar el usuario");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault()

    postData()
  };

  return (
    <div className={styles.container}>
      <h1>Registro de Usuarios</h1>

      <form onSubmit={handleSubmit}>
        {[
          {
            label: "Nombre:",
            name: "name",
            type: "text",
          },
          {
            label: "Nombre de Usuario:",
            name: "username",
            type: "text",
          },
          {
            label: "Contraseña:",
            name: "password",
            type: "password",
          },
          {
            label: "Correo electrónico:",
            name: "email",
            type: "text",
          },
          {
            label: "Fecha de nacimiento:",
            name: "birthdate",
            type: "date",
          },
          {
            label: "Número de Dni:",
            name: "nDni",
            type: "text",
          },
        ].map(({ label, name, type }) => {
          return (
            <div className={styles.inputGroup} key={name}>
              <label className={styles.label}>{label}</label>
              <input
                value={form[name]}
                name={name}
                type={type}
                onChange={handleChange}
              />
              {errors[name] && <span className={styles.error}>{errors[name]}</span>}
            </div>
          );
        })}
        <button className={styles.button}disabled={errors.email} type="submit">Registrar</button>
      </form>
      <hr />
    </div>
    
    
  );
};
export default register;
