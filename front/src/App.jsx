import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home/Home";
import MyAppointments from "./views/MyAppointments/MyAppointments";
import Register from "./views/register/register";
import Login from "./views/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import NewAppointment from "./views/NewAppointment/NewAppointment";

function App() {
  return (
    <body>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Home />} />
          <Route path="appointments" element={<MyAppointments />} />
          <Route path="newAppointment" element={<NewAppointment/>} />

        </Routes>

       
      </div>
    </body>
  );
}

export default App;
