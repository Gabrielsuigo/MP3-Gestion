import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home/Home";
import MyAppointments from "./views/MyAppointments/MyAppointments";

import Login from "./views/login/Login";
import Navbar from "./components/Navbar/Navbar";
import NewAppointment from "./views/NewAppointment/NewAppointment";
import Footer from "./components/Footer/Footer";
import Register from "./views/register/Register";

function App() {
  return (
    <div className="appContainer">
      <Navbar />

      <div className="appContent">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Home />} />
          <Route path="appointments" element={<MyAppointments />} />
          <Route path="newAppointment" element={<NewAppointment />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;