import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Login } from "../features/Login";
import { DashboardRoutes } from "./DashboardRoutes";
import { ChildPacienteRoutes } from "./ChildPacienteRoutes";

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
        children: [          
          {
            path: "/odontologos",
            element: <h1>Odontologos Registrados</h1>,
          },
          {
            path: "/odontologo",
            element: <h1>Nuevo Odontologo</h1>,
          },
          {
            path: "odontologo/:id",
            element: <h1>Editar Odontologo</h1>,
          },
        ],
      },
      {
        path: "/",
        children: [          
          {
            path: "/horarios",
            element: <h1>Horarios Registrados</h1>,
          },
          {
            path: "/horario",
            element: <h1>Nuevo Horario</h1>,
          },
          {
            path: "/horario/:id",
            element: <h1>Editar Horario</h1>,
          },
        ],
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
