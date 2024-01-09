import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Login } from "../features/Login";
import { DashboardRoutes } from "./DashboardRoutes";
import { ChildPacienteRoutes } from "./ChildPacienteRoutes";
import { ChildOdontologoRoutes } from "./ChildOdontologoRoutes";
import { ChildHorarioRoutes } from "./ChildHorarioRoutes";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <DashboardRoutes />,
    children: [
      {
        index: true,
        element: <Navigate to={"/citas"} />,
      },
      {
        path: "/",
        children: [          
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
        ],
      },
      {
        path: "/",
        children: ChildPacienteRoutes
      },
      {
        path: "/",
        children: ChildOdontologoRoutes
      },
      {
        path: "/",
        children: ChildHorarioRoutes,
      },
      {
        path: "/",
        children: [          
          {
            path: "/usuarios",
            element: <h1>Usuarios Registrados</h1>,
          },
          {
            path: "/usuario",
            element: <h1>Nuevo Usuario</h1>,
          },
          {
            path: "usuario/:id",
            element: <h1>Editar Usuario</h1>,
          },
        ],
      },   
      {
        path: "/",
        children: [          
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
        ],
      },     
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
