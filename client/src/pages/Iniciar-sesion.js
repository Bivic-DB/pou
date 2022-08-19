import React from 'react'
import '../styles/Iniciar-sesion.css';

function Iniciars(){
  return(
    <div>
      <div id='cont'>
           <h1>Iniciar sesión</h1>

           <input type="text" name="correo"> Correo electrónico</input>
           <input type="text" name="contrasenna"> Contraseña</input>
           <input type="text" name="confcontrasenna"> Confirmar contraseña</input>
           <button>Iniciarsesion</button>

      </div>
    </div>
  )
}

export default Iniciars