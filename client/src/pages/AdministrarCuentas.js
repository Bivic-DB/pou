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
                
               <table  className='table table-hover'>
                    <thead>
                        <tr>
                            <th scope="col"> Nombre</th>
                            <th scope="col"> Apellidos </th>
                            <th scope="col"> Email </th>
                            <th scope="col"> Contraseña </th>
                            <th scope="col"> Rol </th>
                            <th scope="col"> Modificiar </th>
                            <th scope="col"> Eliminar </th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* Mapeo en la lista de usuarios */}
                        {ListaUsuarios.map((val, key) => {
                            return (
                                <tr>
                                    <td>{val.NOMBRE}</td>
                                    <td>{val.APELLIDO} {val.APELLIDODOS}</td>
                                    <td>{val.CORREO}</td>
                                    <td>{val.CONTRASENA}</td>
                                    <td>{val.ROL}</td>
                                    <td><button className='btn btn-outline-primary'>Modificiar</button></td>
                                    <td><button className='btn btn-danger'>Eliminar</button></td>
                                </tr>
                            )  
                        })}
                    </tbody>
                </table> 
                
            </div>
        </div>
    )

}

export default AdministrarCuentas