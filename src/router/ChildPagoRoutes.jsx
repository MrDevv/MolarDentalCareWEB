import React from "react";

export const ChildPagoRoutes = [
  {
    path: "/pagos",
    element: <h1>Pagos Registrados</h1>,
  },
  {
    path: "/pago",
    element: <h1>Nuevo Pago</h1>,
  },
  {
    path: "/pago/:id",
    element: <h1>Editar Pago</h1>,
  },
];
