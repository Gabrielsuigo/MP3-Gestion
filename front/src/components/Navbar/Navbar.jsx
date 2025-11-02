import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { logoutUser } from "../../redux/reducer";

const Navbar = () => {
  const userData = useSelector((state) => state.userActive);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/"); // 🔹 Redirige al login
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoSection}>
        <Link to="/home" className={styles.logoLink}>
          <img src="./vite.svg" alt="CityBank logo" className={styles.logo} />
          <span className={styles.brand}>CityBank</span>
        </Link>
      </div>

      <div className={styles.navLinks}>
        {userData.name ? (
          <>
            <span className={styles.username}>Hola, {userData.name}</span>
            <Link to="/appointments">
              <button className={styles.btnPrimary}>Mis turnos</button>
            </Link>
            <button className={styles.btnSecondary} onClick={handleLogout}>
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <Link to="/register">
              <button className={styles.btnSecondary}>Registrarse</button>
            </Link>
            <Link to="/">
              <button className={styles.btnPrimary}>Iniciar sesión</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;