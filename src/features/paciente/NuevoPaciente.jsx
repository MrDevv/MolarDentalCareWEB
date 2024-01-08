import React from "react";
import { Header } from "../../components/Header";
import { consultarDatos } from "../../services/consultarNombresPorDni";
import { useForm } from "../../hook/useForm";

export const NuevoPaciente = () => {
  const {user, setNombresByDni, onChangeValue, onReset, validarCampos} = useForm();

  const getNameByDni = async (dni) => {
    const data = await consultarDatos(dni);

    const { apellidoMaterno, apellidoPaterno, nombres, success } = data;

    if (success) {
      setNombresByDni(apellidoMaterno, apellidoPaterno, nombres)
    } else {
      console.log(
        "Ocurrió un error al consultar los datos con el DNI ingresado"
      );
    }
  }  

  const onSubmit = (e) => {
    e.preventDefault();

    if (!validarCampos()) {
      console.log(user);      
    }else{
      console.log('Campos incompletos');
    }
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
                value={user.dni}
                autoComplete="off"
              />
              <button type="button" onClick={() => getNameByDni(user.dni)}>
                Consultar Datos
              </button>
            </div>

            <div className="apellidos">
              <label htmlFor="">Apellidos</label>
              <input
                type="text"
                disabled
                name="apellidos"
                value={user.apellidos}
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
                value={user.nombres}
                onChange={onChangeValue}
                autoComplete="off"
              />
            </div>

            <div className="fecha_nacimiento">
              <label htmlFor="">Fecha de nacimiento</label>
              <input
                type="text"
                name="fechaDeNacimiento"
                value={user.fechaDeNacimiento}
                onChange={onChangeValue}
                autoComplete="off"
              />
            </div>

            <div className="telefono">
              <label htmlFor="">Telefono</label>
              <input
                type="text"
                name="telefono"
                value={user.telefono}
                onChange={onChangeValue}
                autoComplete="off"
              />
            </div>

            <div className="correo">
              <label htmlFor="">Correo</label>
              <input
                type="text"
                name="correo"
                value={user.correo}
                onChange={onChangeValue}
                autoComplete="off"
              />
            </div>

            <div className="direccion">
              <label htmlFor="">Dirección</label>
              <input
                type="text"
                name="direccion"
                value={user.direccion}
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
