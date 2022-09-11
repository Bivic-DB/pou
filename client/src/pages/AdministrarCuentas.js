import React, { useState, useEffect} from 'react'
import Axios from 'axios';
import '../styles/FormsAdministrar.css';
import Swal from 'sweetalert2';

function AdministrarCuentas() {
    
    // Variables para guardar información
    const [ListaUsuarios, setListaUsuarios] = useState([]);
    const [Usuario, setUsuario] = useState([]);

    // Funcion para obtener usuarios cada que se refresque la página
    useEffect(() => {
        Axios.get('http://localhost:3001/ListaUsuarios').then((response) => {
            setListaUsuarios(response.data);
        });
    }, []);

    // funcion para eliminar usuarios
    const eliminaUsuario = (id) =>{
        Swal.fire({
            title: '¿Estas seguro?',
            text: "No podrás revertir este cambio",
            icon: 'warning',
            showCancelButton: true,
            CalcelButtonText: 'Cancelar',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar'
        }).then((result) =>{
            if(result.isConfirmed){
                Swal.fire(
                    'Eliminado',
                    'Usuario elimado de manera correcta',
                    'success'
                );
                
                Axios.delete(`http://localhost:3001/UsuariosEliminar/${id}`,)
            }
        })
    };

    //
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
            <h1> Administrador de cuentas</h1>
                <br/>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th scope="col"> Nombre</th>
                            <th scope="col"> Apellidos </th>
                            <th scope="col"> Email </th>
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
                                    <td>{val.ROL}</td>
                                    <td><a className='btn btn-outline-primary' data-bs-toggle="offcanvas" data-bs-target="#offcanvasPlantilla" aria-controls='offcanvasPlantilla' role="button" onClick={() => {BuscarUsuario(val.CORREO)}}>Modificar</a></td>
                                    <td><button className='btn btn-danger' onClick={() => {eliminaUsuario(val.CORREO)}}>Eliminar</button></td>
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
                    {/* Cuerpo del apartado */}
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