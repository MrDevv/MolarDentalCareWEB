export const getHorariosInicio = () => {
  return [
    "6:00",
    "7:00",
    "8:00",
    "9:00",
    "10:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];
};

export const getHorariosFin = (horariosInicio) => {  
  return horariosInicio.map((horaInicio) => horaInicio.replace("00", "59"));
};
