import { NuevoOdontologo } from "../features/odontologo/NuevoOdontologo";

export const ChildOdontologoRoutes = [
  {
    path: "/odontologos",
    element: <h1>Odontologos Registrados</h1>,
  },
  {
    path: "/odontologo",
    element: <NuevoOdontologo/>,
  },
  {
    path: "odontologo/:id",
    element: <h1>Editar Odontologo</h1>,
  },
];
