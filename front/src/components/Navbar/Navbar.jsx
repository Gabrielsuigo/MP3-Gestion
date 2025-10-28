import { useSelector } from "react-redux";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const userData = useSelector((state) => state.userActive);
  return (
    <nav className={styles.navbarContainer}>
      <Link to="/home">
        <button>
          <img src="./vite.svg" alt="image logo" />
        </button>
      </Link>

      <h1>Welcome to CityBanck</h1>
      <div className={styles.buttonsContainer}>
        {userData.name ? (
          <Link to="/appointments">
            <button>My Appointments</button>
          </Link>
        ) : (
          <Link to="/">
            <button>Login</button>
          </Link>
          
        )}
      </div>
    </nav>
  );
};

export default Navbar;
