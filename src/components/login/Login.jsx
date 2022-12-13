import React from "react";
import styles from "./login.module.scss";
import logo from "./LogoGuruyu.svg";

function Login() {
  return (
    <>
      <form>
        <img src={logo} className={styles.logo} alt="logo Guruyu" />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="correo electrónico"
          required
        ></input>
        <input
          type="text"
          id="pass"
          name="pass"
          placeholder="contraseña"
          required
        ></input>
        <button type="submit">Ingresar</button>
      </form>
    </>
  );
}

export default Login;
