import React, {useState, useEffect} from 'react';
import '../styles/Registro.css';

function registrarse(){

    const [CORREO, setCORREO] = useState('');

    return(
        <div className='row'>
            <div className='form'>
                <h1> Regístrate </h1>

                <label>Correo:</label>
                <input type="text" name="CORREO"></input>
                <label>Nombre:</label>
                <input type="text" name="NOMBRE"></input>
                <label>Primer Apellido:</label>
                <input type="text" name="APELLIDO"></input>
                <label>Segundo Apellido:</label>
                <input type="text" name="2APELLIDO"></input>
                <label>Contraseña:</label>
                <input type="text" name="CONTRASENA"></input>
                <label>Rol:</label>
                <input type="text" name="ROL"></input>

                <button>Registrar</button>
            </div>
        </div>
    )
}

export default registrarse