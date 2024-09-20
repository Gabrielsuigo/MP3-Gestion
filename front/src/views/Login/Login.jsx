import React, { useEffect, useState } from "react";
import axios from "axios";
import { validateLogin } from "../../helpers/validate";
import { addUser } from "../../redux/reducer";
import { useDispatch } from "react-redux";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";


  const Login = () => {
    const navigate = useNavigate
    const dispatch = useDispatch()
    const initialState = {
      username: "",
      password: "",
    };
    const [form, setform] = useState(initialState);
    const [errors, setErrors] = useState(initialState);

    useEffect(() => {
      const errors = validateLogin(form);
      setErrors(errors);
    }, [form]);

    const handleChange = (event) => {
      const { name, value } = event.target;
      setform({ ...form, [name]: value });
    };

    const postData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/users/login", form);

        if (response.status === 200) {
          dispatch(addUser(response.data.user))
          alert("Usuario logeado con Éxito");
          navigate("/home")

        } else {
          alert("Falló al logear al usuario");
        }
        setform(initialState);
      } catch (error) {
        console.log("Error al servidor", error);
          alert("Falló al logear al usuario");
      }
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      postData();
    };

    return (
      <div className={styles.container}>
        <h2>Login de Usuarios</h2>
<hr />
        <form onSubmit={handleSubmit}>
          {[
          
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
          <button className={styles.button} disabled={errors.username} type="submit">Login</button>
        </form>
      </div>
    );
  };



export default Login;
