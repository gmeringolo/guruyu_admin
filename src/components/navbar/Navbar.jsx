import React from "react";
import styles from "./navbar.module.scss";
import logo from "./LogoNav.svg";
import exit from "./exit.svg";

function Navbar() {
  return (
    <>
      <nav>
        <div className={styles.menu}>
          <a href="#inicio" className={styles.enlace}>
            <img src={logo} className={styles.logo} alt="logo Guruyu" />
          </a>
          <ul>
            <li>
              <a href="#jugadores" title="jugadores">
                Jugadores
              </a>
            </li>
            <li>
              <a href="#equipos" title="equipos">
                Equipos
              </a>
            </li>
            <li>
              <a href="#partidos" title="partidos">
                Partidos
              </a>
            </li>
            <li>
              <a href="#medios" title="medios">
                Medios
              </a>
            </li>
            <li>
              <a href="#noticias" title="noticias">
                Noticias
              </a>
            </li>
            <li>
              <a href="#f&q" title="f&q">
                F&Q
              </a>
            </li>
          </ul>
        </div>
        <img src={exit} className={styles.exit} alt="cerrar sesión" />
      </nav>
    </>
  );
}

export default Navbar;
