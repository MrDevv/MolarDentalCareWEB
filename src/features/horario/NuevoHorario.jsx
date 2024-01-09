import React from "react";
import { Header } from "../../components/Header";
import { FormHorario } from "../../components/FormHorario";
import { useForm } from "../../hook/useForm";
import Swal from "sweetalert2";

export const NuevoHorario = () => {
  const { formState, onChangeValue, onReset, isFormValid } = useForm({
    id: "",
    fecha: "",
    horaInicio: "",
    horaFin: "",
    estado: "DISPONIBLE",
    dniOdontologo: "",
    nombreOdontologo: "",
  });

  const getOdontologoByDni = (dni) => {
    if (dni.length === 0) {
        Swal.fire({
          title: "Campo Incompleto",
          text: "Ingrese el DNI de un odontologo",
          icon: "warning"
        });
        return 
      }

    //   TODO buscar odontologo en la db
    console.log(dni);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      console.log(formState);
    } else {
      Swal.fire({
        title: "Campos Incompletos",
        text: "Por favor completar todos los campos.",
        icon: "warning",
      });
    }
  };

  return (
    <div className="container-pages">
      <Header title={"Registrar Horario"} />

      <FormHorario
        horario={formState}
        onChangeValue={onChangeValue}
        onSubmit={onSubmit}
        onReset={onReset}
        getOdontologoByDni={getOdontologoByDni}
      />
    </div>
  );
};
