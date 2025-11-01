import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const userData = useSelector((state) => state.userActive);

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
          </>
        ) : (
          <Link to="/">
            <button className={styles.btnSecondary}>Iniciar sesión</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;