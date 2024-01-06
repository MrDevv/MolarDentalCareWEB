
export const menuOptions = [
    {
      optionMenu: "cita",
      value_span: "Citas",
      image: "fa-solid fa-calendar-check",
      submenu: [
        {
          name: "Citas",
          link: "/citas",
        },
        {
          name: "Nueva Cita",
          link: "/cita",
        },
      ],
    },
    {
      optionMenu: "paciente",
      value_span: "Pacientes",    
      image: "fa-solid fa-hospital-user",
      submenu: [
        {
          name: "Pacientes",
          link: "/pacientes",
        },
        {
          name: "Nuevo Paciente",
          link: "/paciente",
        },
      ],
    },
    {
      optionMenu: "odontologo",
      value_span: "Odontologos",    
      image: "fa-solid fa-user-doctor",
      submenu: [
        {
          name: "Odontologos",
          link: "/odontologos",
        },
        {
          name: "Nuevo Odontologo",
          link: "/odontologo",
        },
      ],
    },
    {
      optionMenu: "horario",
      value_span: "Horarios",
      image: "fa-solid fa-calendar-days",
      submenu: [
        {
          name: "Horarios",
          link: "/horarios",
        },
        {
          name: "Nuevo Horario",
          link: "/horario",
        },
      ],
    },
    {
      optionMenu: "usuario",
      value_span: "Usuarios",
      image: "fa-solid fa-user",
      submenu: [
        {
          name: "Usuarios",
          link: "/usuarios",
        },
        {
          name: "Nuevo Usuario",
          link: "/usuario",
        },
      ],
    },
    {
      optionMenu: "pago",
      value_span: "Pagos",
      image: "fa-solid fa-cash-register",
      submenu: [
        {
          name: "Pagos",
          link: "/pagos",
        },
        {
          name: "Nuevo Pago",
          link: "/pago",
        },
      ],
    },
  ];