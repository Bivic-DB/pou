import React, { useState, useEffect} from 'react'
import Axios from 'axios';
import '../styles/FormsAdministrar.css';
import Swal from 'sweetalert2';

function AdministrarCuentas() {
    
    // Variables para guardar información
    const [ListaUsuarios, setListaUsuarios] = useState([]);
    const [Usuario, setUsuario] = useState([]);
    const [NuevoNombre, setNuevoNombre] = useState("");
    const [NuevoApellido, setNuevoApellido] = useState("");
    const [NuevoSegApellido, setNuevoSegApellido] = useState("");
    const [NuevoRol, setNuevoRol] = useState("");

    // Funcion para obtener usuarios cada que se refresque la página
    useEffect(() => {
        Axios.get('https://bivic-db-deploy.herokuapp.com/ListaUsuarios').then((response) => {
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
                
                Axios.delete(`https://bivic-db-deploy.herokuapp.com/UsuariosEliminar/${id}`,)
            }
        })
    };

    // Busca el usuario para mostrarlo en el offcanvas
    const BuscarUsuario = (id) => {
        console.log(id);
        Axios.get(`https://bivic-db-deploy.herokuapp.com/UsuarioModificar/${id}`, 
        ).then((response) =>{
            setUsuario(response.data);
            console.log(Usuario);
        })
    };

    // Cambiar la informacion del usuario
    const ActualizarUsuario = (id) =>{
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
              Swal.fire(
                'Actualizado',
                'El usuario a sido actualizado correctamente',
                'success'
              );
              Axios.put('https://bivic-db-deploy.herokuapp.com/ModificarUsuario', {
                NNombre: NuevoNombre,
                NApellido: NuevoApellido,
                NSApellido: NuevoSegApellido,
                Email: id,
                NRol: NuevoRol,
              })
            }
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
                            <div className='offcanvas-body'>
                                <div className='container-sm'>
                                    <div className='form-floating mb-3'> 
                                        <input type="text" className='form-control' id="nombre" placeholder='123' value={val.NOMBRE} onChange={
                                            (event) => {
                                                setNuevoNombre(event.target.value)
                                            }}></input>
                                        <label htmlFor="nombre">Nombre </label>
                                    </div>
                                    <div className='form-floating mb-3'> 
                                        <input type="text" className='form-control' id="Apellido" placeholder='123' value={val.APELLIDO} onChange={
                                            (event) => {
                                                setNuevoApellido(event.target.value)
                                            }}></input>
                                        <label htmlFor="Apellido">Apellido </label>
                                    </div>    
                                    <div className='form-floating mb-3'> 
                                        <input type="text" className='form-control' id="apellido2" placeholder='123' value={val.APELLIDODOS} onChange={
                                            (event) => {
                                                setNuevoSegApellido(event.target.value)
                                            }}></input>
                                        <label htmlFor="apellido2">Segundo Apellido</label>
                                    </div>    
                                    <div className='form-floating mb-3'> 
                                        <input type="text" className='form-control' id="correo" placeholder='123' value={val.CORREO} disabled></input>
                                        <label htmlFor="correo">Correo </label>
                                    </div>      
                                    <div className='form-floating'>
                                        <select className='form-select' id="floatingSelect" aria-label="floating label select example" onChange={(e)=>{
                                            const SelectedRol = e.target.value;
                                            setNuevoRol(SelectedRol);
                                        }}>
                                            <option selected disabled>Seleccionar</option>
                                            <option value="1"> Administrador </option>
                                            <option value="2"> Estudiante/Profesor </option>
                                            <option value="3"> Invitado </option>
                                        </select>
                                        <label htmlFor="floatingSelect">Rol del usuario</label>
                                    </div>  
                                    <br></br>
                                    <button className='btn btn-outline-primary'  onClick={() => {ActualizarUsuario(val.CORREO)}}>Actualizar Usuario</button>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )

}

export default AdministrarCuentas