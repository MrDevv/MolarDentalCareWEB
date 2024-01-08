import { useState } from "react";

export const useForm = () => {
  const [user, setUser] = useState({
    dni: "",
    apellidos: "",
    nombres: "",
    fechaDeNacimiento: "",
    telefono: "",
    correo: "",
    direccion: "",
  });

  const onChangeValue = ({ target }) => {
    const { name, value } = target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const setNombresByDni = (apellidoMaterno, apellidoPaterno, nombres) => {
    setUser({
        ...user,
        apellidos: apellidoMaterno + " " + apellidoPaterno,
        nombres,
      });
  }

  const onReset = () => {
    setUser({
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
    } = user;

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

  return {
    user,
    setNombresByDni,
    onChangeValue,
    onReset,
    validarCampos
  };
};
