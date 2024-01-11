import React from 'react'

export const FormUsuario = ({user, getRoles, onChangeValue, getNameByDni, onSubmit, onReset}) => {

    const roles = getRoles();

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
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={onChangeValue}
            autoComplete="off"
          />
        </div>

        <div className="password">
          <label htmlFor="">Contraseña</label>
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={onChangeValue}
            autoComplete="off"
          />
        </div>

        <div className="estado">
          <label htmlFor="">Estado</label>
          <select name="estado" id="estado" onChange={onChangeValue} value={user.estado}>            
                    <option value={1}>ACTIVO</option>        
                    <option value={0}>NO ACTIVO</option>                        
          </select>
        </div> 

        <div className="rol">
          <label htmlFor="">Rol</label>
          <select name="idRol" id="rol" onChange={onChangeValue} value={user.idRol}>
            {
                roles.map(({idRol, description}) => (
                    <option key={idRol} value={idRol}>{description}</option>        
                ))
            }            
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
  )
}
