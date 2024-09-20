import styles from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import React, { useState, useEffect } from "react";

const Home = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        <h3>Gestor de turnos</h3>
      </div>
    </>
  );
};

export default Home;
