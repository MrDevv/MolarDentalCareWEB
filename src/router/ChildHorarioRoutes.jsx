import React from "react";
import { NuevoHorario } from "../features/horario/NuevoHorario";

export const ChildHorarioRoutes = [
  {
    path: "/horarios",
    element: <h1>Horarios Registrados</h1>,
  },
  {
    path: "/horario",
    element: <NuevoHorario/>,
  },
  {
    path: "/horario/:id",
    element: <h1>Editar Horario</h1>,
  },
];
