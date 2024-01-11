import React from "react";
import { Header } from "../../components/Header";
import { useForm } from "../../hook/useForm";
import { FormUsuario } from "../../components/FormUsuario";
import Swal from "sweetalert2";
import { consultarDatos } from "../../services/consultarNombresPorDni";
import { generarUser } from "../../utils/generarUser";

export const NuevoUsuario = () => {
  const { formState, setNombresByDni, onChangeValue, onReset, isFormValid } =
    useForm({      
      idRol: "1",
      apellidos: "",
      nombres: "",
      dni: "",
      email: "",
      telefono: "",      
      password: "",
      estado: 1,
    });

  const getNameByDni = async (dni) => {
    if (dni.length === 0) {
      Swal.fire({
        title: "Campo Incompleto",
        text: "Ingrese un DNI",
        icon: "warning",
      });
      return;
    }

    const data = await consultarDatos(dni);

    const { apellidoMaterno, apellidoPaterno, nombres, success } = data;

    if (success) {
      setNombresByDni(apellidoMaterno, apellidoPaterno, nombres);
    } else {
      Swal.fire({
        title: "Error",
        text: "Ocurrió un error al buscar los datos con el DNI ingresado.",
        icon: "error",
      });
    }
  };

  const getRoles = () => {
    return [
      {
        idRol: 1,
        description: 'ADMINISTRADOR'
      },
      {
        idRol: 2,
        description: 'ASISTENTE'
      },
    ]
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      const {apellidos, nombres} = formState
      console.log({...formState, usuario: generarUser(apellidos, nombres)});
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
      <Header title={"Registrar Usuario"} />

      <FormUsuario
        user={formState}
        getRoles={getRoles}
        onChangeValue={onChangeValue}
        getNameByDni={getNameByDni}
        onSubmit={onSubmit}
        onReset={onReset}        
      />
    </div>
  );
};
