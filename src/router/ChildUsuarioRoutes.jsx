import { NuevoUsuario } from "../features/usuario/NuevoUsuario";

export const ChildUsuarioRoutes = [
  {
    path: "/usuarios",
    element: <h1>Usuarios Registrados</h1>,
  },
  {
    path: "/usuario",
    element: <NuevoUsuario/>,
  },
  {
    path: "usuario/:id",
    element: <h1>Editar Usuario</h1>,
  },
];
