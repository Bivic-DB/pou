import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import '../styles/FormsAdministrar.css';
import Swal from 'sweetalert2';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Select from 'react-select';

function AdministrarCuentas() {

    // Variables para guardar información
    const [ListaUsuarios, setListaUsuarios] = useState([]);
    let Usuario = [];
    const [NuevoNombre, setNuevoNombre] = useState("");
    const [NuevoApellido, setNuevoApellido] = useState("");
    const [NuevoSegApellido, setNuevoSegApellido] = useState("");
    const [NuevoRol, setNuevoRol] = useState("");
    let autoincrement = 0;

    const data = [{ value: 1, label: "Administrador"}, {value: 2, label: "Estudiante/Profesor"}, {value: 3, label: "Invitado"}, {value: 4, label: "Seleccionar Rol"}];
    const [selectedValue, setSelectedValue] = useState(4);

    const handleChangeSe = e => {
        setSelectedValue(e.value);
    };
    
    // Funcion para obtener usuarios cada que se refresque la página
    useEffect(() => {
        Axios.get('https://bivic-db-deploy.herokuapp.com/ListaUsuarios').then((response) => {
            setListaUsuarios(response.data);
        });
    }, []);

    // funcion para eliminar usuarios
    const eliminaUsuario = (id) => {
        Swal.fire({
            title: '¿Estas seguro?',
            text: "No podrás revertir este cambio",
            icon: 'warning',
            showCancelButton: true,
            CalcelButtonText: 'Cancelar',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                Axios.delete(`https://bivic-db-deploy.herokuapp.com/UsuariosEliminar/${id}`).then((response) => {
                    setListaUsuarios(ListaUsuarios.filter((val) => {
                        return val.id != id
                    }))
                    window.location.reload();
                })
                Swal.fire(
                    'Eliminado',
                    'Usuario elimado de manera correcta',
                    'success'
                );

            }
        })
    };

    // Busca el usuario para mostrarlo en el offcanvas
    const BuscarUsuario = (id, nombre, apellido, apellidodos, rol) => {
        Usuario = [id, nombre, apellido, apellidodos, rol];
    };

    // Cambiar la informacion del usuario
    const ActualizarUsuario = (id) => {
        Swal.fire({
            title: '¿Estas seguro de actualizar este usuario?',
            text: "La información actualizada no se podrá recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Actualizar'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(selectedValue);
                Axios.put('https://bivic-db-deploy.herokuapp.com/ModificarUsuario', {
                    Nid: id,
                    NRol: selectedValue,
                })

                Swal.fire(
                    'Actualizado',
                    'El usuario a sido actualizado correctamente',
                    'success'
                ).then(function() {
                    window.location.reload();
                });
                
            }
        })
    };
    return (
        <div className='AdministradorCuentas'>
            <div className='container-sm'>
                <h1> Administrador de cuentas</h1>
                <br />
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th scope="col"> Nombre</th>
                            <th scope="col"> Apellidos </th>
                            <th scope="col"> Correo </th>
                            <th scope="col"> Rol </th>
                            <th scope="col"> Modificar </th>
                            <th scope="col"> Eliminar </th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* Mapeo en la lista de usuarios */}
                        {ListaUsuarios.map((val, key) => {
                            return (
                                <tr key={autoincrement++}>
                                    <td key={autoincrement++}>{val.nombre}</td>
                                    <td key={autoincrement++}>{val.apellido} {val.segundoapellido}</td>
                                    <td key={autoincrement++}>{val.correo}</td>
                                    <td key={autoincrement++}>{val.rol}</td>
                                    <td key={autoincrement++}><a className='btn btn-outline-primary' data-bs-toggle="offcanvas" data-bs-target="#offcanvasPlantilla" aria-controls='offcanvasPlantilla' role="button" onClick={BuscarUsuario(val.correo, val.nombre, val.apellido, val.segundoapellido, val.rol)}>Modificar</a></td>
                                    <td key={autoincrement++}><button className='btn btn-danger' onClick={() => { eliminaUsuario(val.correo) }}>Eliminar</button></td>
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
                    <div className='offcanvas-body'>
                        <div className='container-sm'>
                            <div className='form-floating mb-3'>
                                <input type="text" className='form-control' id="nombre" placeholder='123' value={Usuario[1]} disabled></input>
                                <label htmlFor="nombre">Nombre </label>
                            </div>
                            <div className='form-floating mb-3'>
                                <input type="text" className='form-control' id="Apellido" placeholder='123' value={Usuario[2]} disabled></input>
                                <label htmlFor="Apellido">Apellido </label>
                            </div>
                            <div className='form-floating mb-3'>
                                <input type="text" className='form-control' id="apellido2" placeholder='123' value={Usuario[3]} disabled></input>
                                <label htmlFor="apellido2">Segundo Apellido</label>
                            </div>
                            <div className='form-floating mb-3'>
                                <input type="text" className='form-control' id="correo" placeholder='123' value={Usuario[0]} disabled></input>
                                <label htmlFor="correo">Correo </label>
                            </div>
                            <div className='form-floating'>
                                <Select
                                    name="selectURole"
                                    placeholder = "Seleccionar"
                                    value={data.find(obj => obj.value === selectedValue)}
                                    options={data}
                                    onChange={handleChangeSe}
                                />
                            </div>
                            <br></br>
                            <button className='btn btn-outline-primary' onClick={() => { ActualizarUsuario(Usuario[0]) }}>Actualizar Usuario</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default AdministrarCuentas