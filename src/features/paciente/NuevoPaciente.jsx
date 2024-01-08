import React from "react";
import { Header } from "../../components/Header";
import { consultarDatos } from "../../services/consultarNombresPorDni";
import { useForm } from "../../hook/useForm";
import { Form } from "../../components/Form";

export const NuevoPaciente = () => {
  const { user, setNombresByDni, onChangeValue, onReset, validarCampos } =
    useForm();

  const getNameByDni = async (dni) => {
    const data = await consultarDatos(dni);

    const { apellidoMaterno, apellidoPaterno, nombres, success } = data;

    if (success) {
      setNombresByDni(apellidoMaterno, apellidoPaterno, nombres);
    } else {
      console.log(
        "Ocurrió un error al consultar los datos con el DNI ingresado"
      );
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!validarCampos()) {
      console.log(user);
    } else {
      console.log("Campos incompletos");
    }
  };

  return (
    <div className="container-pages">
      <Header title={"Registrar Paciente"} />

      <Form
        user={user}
        onChangeValue={onChangeValue}
        getNameByDni={getNameByDni}
        onSubmit={onSubmit}
        onReset={onReset}
      />
    </div>
  );
};
