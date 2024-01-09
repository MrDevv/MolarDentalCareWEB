import React from "react";
import { Header } from "../../components/Header";
import { consultarDatos } from "../../services/consultarNombresPorDni";
import { useForm } from "../../hook/useForm";
import { Form } from "../../components/Form";
import Swal from "sweetalert2";

export const NuevoPaciente = () => {
  const { formState, setNombresByDni, onChangeValue, onReset, isFormValid } =
    useForm({
        dni: "",
        apellidos: "",
        nombres: "",
        fechaDeNacimiento: "",
        telefono: "",
        correo: "",
        direccion: "",
      });

  const getNameByDni = async (dni) => {
    if (dni.length === 0) {
      Swal.fire({
        title: "Campo Incompleto",
        text: "Ingrese un DNI",
        icon: "warning"
      });
      return 
    }

    const data = await consultarDatos(dni);

    const { apellidoMaterno, apellidoPaterno, nombres, success } = data;

    if (success) {
      setNombresByDni(apellidoMaterno, apellidoPaterno, nombres);
    } else {
      Swal.fire({
        title: "Error",
        text: "Ocurrió un error al buscar los datos con el DNI ingresado.",
        icon: "error"
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      console.log(formState);
    } else {
      Swal.fire({
        title: "Campos Incompletos",
        text: "Por favor completar todos los campos.",
        icon: "warning"
      });
    }
  };

  return (
    <div className="container-pages">
      <Header title={"Registrar Paciente"} />

      <Form
        user={formState}
        onChangeValue={onChangeValue}
        getNameByDni={getNameByDni}
        onSubmit={onSubmit}
        onReset={onReset}
      />
    </div>
  );
};
