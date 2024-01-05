import { NuevoPaciente } from "../features/paciente/NuevoPaciente";

export const ChildPacienteRoutes = [
  {
    path: "/pacientes",
    element: <h1>Pacientes Registrados</h1>,
  },
  {
    path: "/paciente",
    element: <NuevoPaciente />,
  },
  {
    path: "paciente/:id",
    element: <h1>Editar Paciente</h1>,
  },
];
