import React, { useState } from "react";
import { Header } from "../../components/Header";
import { consultarDatos } from "../../services/consultarNombresPorDni";

export const NuevoPaciente = () => {
  const [paciente, setPaciente] = useState({
    dni: "",
    apellidos: "",
    nombres: "",
    fechaDeNacimiento: "",
    telefono: "",
    correo: "",
    direccion: "",
  });

  const getNameByDni = async (dni) => {
    const data = await consultarDatos(dni);

    const { apellidoMaterno, apellidoPaterno, nombres, success } = data;

    if (success) {
      setPaciente({
        ...paciente,
        apellidos: apellidoMaterno + " " + apellidoPaterno,
        nombres,
      });
    } else {
      console.log(
        "Ocurrió un error al consultar los datos con el DNI ingresado"
      );
    }
  }  

  const onChangeValue = ({ target }) => {
    const { name, value } = target;
    setPaciente({
      ...paciente,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!validarCampos()) {
      console.log(paciente);      
    }else{
      console.log('Campos incompletos');
    }
  };

  const onReset = () => {
    setPaciente({
      dni: "",
      apellidos: "",
      nombres: "",
      fechaDeNacimiento: "",
      telefono: "",
      correo: "",
      direccion: "",
    });
  };

  const validarCampos = () => {
    const {
      dni,
      apellidos,
      nombres,
      fechaDeNacimiento,
      telefono,
      correo,
      direccion,
    } = paciente;

    return (
      dni.length === 0 ||
      apellidos.length === 0 ||
      nombres.length === 0 ||
      fechaDeNacimiento.length === 0 ||
      telefono.length === 0 ||
      correo.length === 0 ||
      direccion.length === 0
    );
  };

  return (
    <div className="container-pages">
      <Header title={"Registrar Paciente"} />

      <div className="container-form">
        <form className="form">
          <div className="line-white"></div>

          <div className="inputs">
            <div className="dni">
              <label htmlFor="">Dni</label>
              <input
                name="dni"
                type="text"
                onChange={onChangeValue}
                value={paciente.dni}
                autoComplete="off"
              />
              <button type="button" onClick={() => getNameByDni(paciente.dni)}>
                Consultar Datos
              </button>
            </div>

            <div className="apellidos">
              <label htmlFor="">Apellidos</label>
              <input
                type="text"
                disabled
                name="apellidos"
                value={paciente.apellidos}
                onChange={onChangeValue}
                autoComplete="off"
              />
            </div>

            <div className="nombres">
              <label htmlFor="">Nombres</label>
              <input
                disabled
                type="text"
                name="nombres"
                value={paciente.nombres}
                onChange={onChangeValue}
                autoComplete="off"
              />
            </div>

            <div className="fecha_nacimiento">
              <label htmlFor="">Fecha de nacimiento</label>
              <input
                type="text"
                name="fechaDeNacimiento"
                value={paciente.fechaDeNacimiento}
                onChange={onChangeValue}
                autoComplete="off"
              />
            </div>

            <div className="telefono">
              <label htmlFor="">Telefono</label>
              <input
                type="text"
                name="telefono"
                value={paciente.telefono}
                onChange={onChangeValue}
                autoComplete="off"
              />
            </div>

            <div className="correo">
              <label htmlFor="">Correo</label>
              <input
                type="text"
                name="correo"
                value={paciente.correo}
                onChange={onChangeValue}
                autoComplete="off"
              />
            </div>

            <div className="direccion">
              <label htmlFor="">Dirección</label>
              <input
                type="text"
                name="direccion"
                value={paciente.direccion}
                onChange={onChangeValue}
                autoComplete="off"
              />
            </div>
          </div>

          <span>
            Todos los campos son requeridos {"("}*{")"}
          </span>

          <div className="line-white"></div>

          <div className="buttons">
            <button onClick={onSubmit} type="submit">
              Registrar
            </button>
            <button onClick={onReset} type="button">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
