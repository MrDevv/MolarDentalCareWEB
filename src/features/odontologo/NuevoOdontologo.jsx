import React from "react";
import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { useForm } from "../../hook/useForm";
import { consultarDatos } from "../../services/consultarNombresPorDni";

export const NuevoOdontologo = () => {
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
      <Header title={"Registrar Odontologo"} />

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
