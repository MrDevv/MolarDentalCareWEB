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
import { ChildUsuarioRoutes } from "./ChildUsuarioRoutes";
import { ChildPagoRoutes } from "./ChildPagoRoutes";
import { ChildCitaRoutes } from "./ChildCitaRoutes";

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
        children: ChildCitaRoutes,
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
        children: ChildUsuarioRoutes,
      },   
      {
        path: "/",
        children: ChildPagoRoutes,        
      },     
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
