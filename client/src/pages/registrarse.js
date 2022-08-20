import React, {useState, useEffect} from 'react';
import '../styles/Registro.css';

function registrarse(){

    return(
        <div className='row'>
            <div className='form'>
                <h1> Regístrate </h1>

                <label>Correo:</label>
                <input className='inputRegistro' type="text" name="CORREO"></input>
                <label>Nombre:</label>
                <input className='inputRegistro' type="text" name="NOMBRE"></input>
                <label>Primer Apellido:</label>
                <input className='inputRegistro' type="text" name="APELLIDO"></input>
                <label>Segundo Apellido:</label>
                <input className='inputRegistro' type="text" name="2APELLIDO"></input>
                <label>Contraseña:</label>
                <input className='inputRegistro' type="text" name="CONTRASENA"></input>
                <label>Rol:</label>
                <input className='inputRegistro' type="text" name="ROL"></input>

                <button className='btnRegistro'>Registrar</button>
            </div>
        </div>
    )
}

export default registrarse