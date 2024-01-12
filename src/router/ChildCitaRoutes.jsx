import React from "react";

export const ChildCitaRoutes = [
  {
    path: "/citas",
    element: <h1>Citas Registradas</h1>,
  },
  {
    path: "/cita",
    element: <h1>Nueva Cita</h1>,
  },
  {
    path: "cita/:id",
    element: <h1>Editar cita</h1>,
  },
];
