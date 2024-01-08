import React from 'react'

export const Form = ({user, onChangeValue, getNameByDni, onSubmit, onReset}) => {
  return (
    <div className="container-form">
        <form className="form">
          <div className="line-white"></div>

          <div className="inputs">
            <div className="dni">
              <label htmlFor="">Dni</label>
              <input
                name="dni"
                type="text"
                onChange={onChangeValue}
                value={user.dni}
                autoComplete="off"
              />
              <button type="button" onClick={() => getNameByDni(user.dni)}>
                Consultar Datos
              </button>
            </div>

            <div className="apellidos">
              <label htmlFor="">Apellidos</label>
              <input
                type="text"
                disabled
                name="apellidos"
                value={user.apellidos}
                onChange={onChangeValue}
                autoComplete="off"
              />
            </div>

            <div className="nombres">
              <label htmlFor="">Nombres</label>
              <input
                disabled
                type="text"
                name="nombres"
                value={user.nombres}
                onChange={onChangeValue}
                autoComplete="off"
              />
            </div>

            <div className="fecha_nacimiento">
              <label htmlFor="">Fecha de nacimiento</label>
              <input
                type="text"
                name="fechaDeNacimiento"
                value={user.fechaDeNacimiento}
                onChange={onChangeValue}
                autoComplete="off"
              />
            </div>

            <div className="telefono">
              <label htmlFor="">Telefono</label>
              <input
                type="text"
                name="telefono"
                value={user.telefono}
                onChange={onChangeValue}
                autoComplete="off"
              />
            </div>

            <div className="correo">
              <label htmlFor="">Correo</label>
              <input
                type="text"
                name="correo"
                value={user.correo}
                onChange={onChangeValue}
                autoComplete="off"
              />
            </div>

            <div className="direccion">
              <label htmlFor="">Dirección</label>
              <input
                type="text"
                name="direccion"
                value={user.direccion}
                onChange={onChangeValue}
                autoComplete="off"
              />
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
  )
}
