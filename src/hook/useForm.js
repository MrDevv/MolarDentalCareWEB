import { useState } from "react";

export const useForm = (inititalForm) => {
  const [formState, setUser] = useState(inititalForm);

  const onChangeValue = ({ target }) => {
    const { name, value } = target;
    setUser({
      ...formState,
      [name]: value,
    });
  };

  const setNombresByDni = (apellidoMaterno, apellidoPaterno, nombres) => {
    setUser({
        ...formState,
        apellidos: apellidoMaterno + " " + apellidoPaterno,
        nombres,
      });
  }

  const onReset = () => {
    setUser(inititalForm);
  };

  const isFormValid = () => {
    const valuesFormState = Object.values(formState);

    return !valuesFormState.includes('')
  };

  return {
    formState,
    setNombresByDni,
    onChangeValue,
    onReset,
    isFormValid
  };
};
