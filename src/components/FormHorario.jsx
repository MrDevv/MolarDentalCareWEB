import React from "react";

export const FormHorario = ({
  horario,
  onChangeValue,
  onSubmit,
  onReset,
  getOdontologoByDni,
  getHorariosValidos,
}) => {
  const { horariosInicio, horariosFin } = getHorariosValidos();

  return (
    <div className="container-form">
      <form className="form">
        <div className="line-white"></div>

        <div className="inputs">
          <div className="dni">
            <label htmlFor="">Dni Odontologo</label>
            <input
              name="dniOdontologo"
              type="text"
              onChange={onChangeValue}
              value={horario.dniOdontologo}
              autoComplete="off"
            />
            <button
              type="button"
              onClick={() => getOdontologoByDni(horario.dniOdontologo)}
            >
              Buscar
            </button>
          </div>

          <div>
            <label htmlFor="">Odontologo</label>
            <input
              disabled
              type="text"
              name="nombreOdontologo"
              value={horario.nombreOdontologo}
              onChange={onChangeValue}
              autoComplete="off"
            />
          </div>

          <div>
            <label htmlFor="">Estado</label>
            <input
              disabled
              type="text"
              name="estado"
              value={horario.estado}
              onChange={onChangeValue}
              autoComplete="off"
            />
          </div>

          <div>
            <label htmlFor="">Hora Inicio</label>
            <select
              name="horaInicio"
              id="horarioInicio"
              onChange={onChangeValue}
              value={horario.horaInicio}
            >
              <option value="">Seleccione una hora</option>
              {horariosInicio.map((horaInicio) => (
                <option key={horaInicio} value={horaInicio}>
                  {horaInicio}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="">Fecha</label>
            <input
              type="text"
              name="fecha"
              value={horario.fecha}
              onChange={onChangeValue}
              autoComplete="off"
            />
          </div>

          <div>
            <label htmlFor="">Hora Fin</label>
            <select
              name="horaFin"
              id="horaFin"
              onChange={onChangeValue}
              value={horario.horaFin}
            >
              <option value="">Seleccione una hora</option>
              {horariosFin.map((horaFin) => (
                <option key={horaFin} value={horaFin}>
                  {horaFin}
                </option>
              ))}
            </select>
          </div>
        </div>

        <span>
          Todos los campos son requeridos {"("}*{")"}
        </span>

        <div className="line-white"></div>

        <div className="buttons">
          <button onClick={onSubmit} type="submit">
            Registrar
          </button>
          <button onClick={onReset} type="button">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};
