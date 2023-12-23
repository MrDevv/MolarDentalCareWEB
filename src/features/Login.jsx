import React from "react";

export const Login = () => {
  return (
    <div className="page-login">
      <div className="container-login">
        <div className="logo">
          <img src="./assets/logo.png" alt="logo" />
        </div>
        <div className="formulario">
          <form action="">
            <span>Bienvenido</span>
            <span>Inicia Sesión para continuar.</span>
            <div className="input-user">
              <i class="fa-solid fa-user"></i>
              <input type="text" placeholder="Usuario" />
            </div>
            <div className="input-password">
              <i class="fa-solid fa-lock"></i>
              <input type="password" placeholder="Contraseña" />
            </div>
            <button className="btn-login" type="submit">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
