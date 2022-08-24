import React, { useState } from 'react'
import Axios from 'axios';
import '../styles/FormsAdministrar.css';


function AdministrarCuentas() {

    const [ListaUsuarios, setListaUsuarios] = useState([]);
    const [Usuario, setUsuario] = useState([]);

    const obtenerUsuarios = () => {
        Axios.get('http://localhost:3001/ListaUsuarios').then((response) => {
            setListaUsuarios(response.data);
        })
    };

    const BuscarUsuario = (id) => {
        console.log(id)
        Axios.get('http://localhost:3001/UsuarioModificar', 
            {
                Email: id,
            }
        ).then((response) =>{
            setUsuario(response.data);
            console.log(Usuario);
        })
    };
    return (
        <div className='AdministradorCuentas'>
            <div className='container-sm'>
                <button className="btn btn-outline-warning" onClick={obtenerUsuarios}> Obtener Usuarios </button>

                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th scope="col"> Nombre</th>
                            <th scope="col"> Apellidos </th>
                            <th scope="col"> Email </th>
                            <th scope="col"> Contraseña </th>
                            <th scope="col"> Rol </th>
                            <th scope="col"> Modificar </th>
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
                                    <td><a className='btn btn-outline-primary' data-bs-toggle="offcanvas" data-bs-target="#offcanvasPlantilla" aria-controls='offcanvasPlantilla' role="button" onClick={() => {BuscarUsuario(val.CORREO)}}>Modificar</a></td>
                                    <td><button className='btn btn-danger'>Eliminar</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                
                {/* OffCanvas Space */}
                <div className='offcanvas offcanvas-start' tabIndex="-1" id="offcanvasPlantilla">
                    {/* Título del apartado */}
                    <div className='offcanvas-header'>
                        <h5 className='offcanvas-title' id="ModificarUsuario">Modificar Usuario</h5>
                        <button className='btn-close' data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    {Usuario.map((val,key) => {
                        return (
                            <div></div>
                        )
                    })}
                </div>

            </div>
        </div>
    )

}

export default AdministrarCuentas