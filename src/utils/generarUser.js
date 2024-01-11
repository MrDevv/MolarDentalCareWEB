export const generarUser = (apellidos, nombres) => {
  const newLastName = apellidos.split(" ");
  const newName = nombres.split(" ");

  return newName[0].slice(0, 1) + newLastName[0] + newLastName[1].slice(0, 2);
};
