import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [option, setOption] = useState(false);

  const handleOption = (optionMenu) => {
    setOption(option === optionMenu ? false : optionMenu);
  };

  return (
    <nav className="navBar-container">
      <div>
        <span
          className="navBar_span"
          style={{ background: `${option === "cita" ? "#00DAFF" : ""}` }}
          onClick={() => handleOption("cita")}
        >
          Cita
        </span>

        <div className={`submenu ${option === "cita" ? "showOptions" : ""}`}>
          <div className="options">
            <Link className="navBar_link" to={"/citas"}>
              Citas
            </Link>
            <Link className="navBar_link" to={"/cita"}>
              Nueva Cita
            </Link>
          </div>
        </div>
      </div>

      <div>
        <span
          className="navBar_span"
          style={{ background: `${option === "paciente" ? "#00DAFF" : ""}` }}
          onClick={() => handleOption("paciente")}
        >
          Paciente
        </span>

        <div
          className={`submenu ${option === "paciente" ? "showOptions" : ""}`}
        >
          <div className="options">
            <Link className="navBar_link" to={"/pacientes"}>
              Pacientes
            </Link>
            <Link className="navBar_link" to={"/paciente"}>
              Nuevo Paciente
            </Link>
          </div>
        </div>
      </div>

      <div>
        <span
          className="navBar_span"
          style={{ background: `${option === "odontologo" ? "#00DAFF" : ""}` }}
          onClick={() => handleOption("odontologo")}
        >
          Odontologo
        </span>

        <div
          className={`submenu ${option === "odontologo" ? "showOptions" : ""}`}
        >
          <div className="options">
            <Link className="navBar_link" to={"/odontologos"}>
              Odontologos
            </Link>
            <Link className="navBar_link" to={"/odontologo"}>
              Nuevo Odontologo
            </Link>
          </div>
        </div>
      </div>

      <div>
        <span
          className="navBar_span"
          style={{ background: `${option === "horario" ? "#00DAFF" : ""}` }}
          onClick={() => handleOption("horario")}
        >
          Horario
        </span>

        <div className={`submenu ${option === "horario" ? "showOptions" : ""}`}>
          <div className="options">
            <Link className="navBar_link" to={"/horarios"}>
              Horarios
            </Link>
            <Link className="navBar_link" to={"/horario"}>
              Nuevo Horario
            </Link>
          </div>
        </div>
      </div>

      <div>
        <span
          className="navBar_span"
          style={{ background: `${option === "usuario" ? "#00DAFF" : ""}` }}
          onClick={() => handleOption("usuario")}
        >
          Usuario
        </span>

        <div className={`submenu ${option === "usuario" ? "showOptions" : ""}`}>
          <div className="options">
            <Link className="navBar_link" to={"/usuarios"}>
              Usuarios
            </Link>
            <Link className="navBar_link" to={"/usuario"}>
              Nuevo Usuario
            </Link>
          </div>
        </div>
      </div>

      <div>
        <span
          className="navBar_span"
          style={{ background: `${option === "pago" ? "#00DAFF" : ""}` }}
          onClick={() => handleOption("pago")}
        >
          Pagos
        </span>

        <div className={`submenu ${option === "pago" ? "showOptions" : ""}`}>
          <div className="options">
            <Link className="navBar_link" to={"/pagos"}>
              Pagos
            </Link>
            <Link className="navBar_link" to={"/pago"}>
              Nuevo Pago
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
