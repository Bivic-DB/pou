import React, { useState} from 'react'
import Axios from 'axios';
import '../styles/FormsAdministrar.css';


function AdministrarCuentas() {

    const [ListaUsuarios, setListaUsuarios] = useState([]);

    const obtenerUsuarios = () => {
        Axios.get('http://localhost:3001/ListaUsuarios').then((response) => {
            setListaUsuarios(response.data);
        })
    };

    return (
        <div className='AdministradorCuentas'>
            <div className='container-sm'>
                <button className="btn btn-outline-warning" onClick={obtenerUsuarios}> Obtener Usuarios </button>
                

                {/* Mapeo en la lista de usuarios */}
                {ListaUsuarios.map((val, key) => {
                    return (
                        <div className='Usuario'>
                            <ul className='list-group list-group-horizontal'>
                                <li className='list-group-item active' aria-current="true">Nombre: {val.NOMBRE}</li>
                                <li className='list-group-item '> Apellido: {val.APELLIDO}</li>
                                <li className='list-group-item '> Segundo Apellido: {val.APELLIDODOS}</li>
                                <li className='list-group-item '> Email: {val.CORREO}</li>
                                <li className='list-group-item '> Contraseña: {val.CONTRASENA}</li>
                                <li className='list-group-item '> Rol: {val.ROL}</li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default AdministrarCuentas