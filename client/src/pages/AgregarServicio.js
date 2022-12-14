import React, { useState, useEffect } from 'react';
import '../styles/FormsAdministrar.css';
import Axios from 'axios';
import Swal from 'sweetalert2';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Select from 'react-select';

function Agregarserv() {
    let err_quantity = 0;

     const initialValues = { Servicio: "", };
     const [formValues, setFormValues] = useState(initialValues);
     const [formErrors, setFormErrors] = useState({});
     const [ListaServicios, setListaServicios] = useState([]);
     const [isSubmit, setIsSubmit] = useState(false);
     const navigate = useNavigate();
     let autoincrement = 0;
     let Servicio ;
     const data = [{ value: 1, label: "Biblioteca Colegio"}, {value: 2, label: "Biblioteca Escuela"}, {value: 3, label: "Seleccionar Ubicación"}];
     const [selectedValue, setSelectedValue] = useState(3);
     const [NewInfo, setNewInfo] = useState("");

     const [Servicios, setServicios] = useState([]);

     const handleChangeS = e => {
        setSelectedValue(e.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        if(err_quantity==0){
            setIsSubmit(true);
            agregarServicio(formValues);
        }else{
            console.log("Validación Incompleta")
        }
        
    };

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
        }
        Axios.get('http://localhost:3001/ListaServicios').then((response) => {
            setListaServicios(response.data);
        });
    }, [formErrors]);

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormValues({ ...formValues, [name]:value });
    };

    const validate = (values) => {
        err_quantity = 0
        const errors = {};
        if(!values.Servicio){
            errors.Servicio = "Se requiere el servicio";
            err_quantity++;
        }
        return errors;
    };

    const agregarServicio = (values) => {
        
        Axios.post('http://localhost:3001/ServiciosR', {
            // Objeto con las propiedades que queremos enviar
            Servicio: values.Servicio,
            Ubicacion: selectedValue,

        }).then(() => {
            //setregisterStatus("Usuario Registrado");
            Swal.fire({
                title:'El servicio se ha registrado correctamente',
                icon: 'success',
            }).then(function() {
                window.location.reload();
            });
        })
        
        
        
    };

    const BuscarServicio = (puesto) => {
        setServicios(ListaServicios[puesto]);
        setFormValues({...formValues, ["Informacion"]: Servicios.informacion});
        
    };

    const eliminaServicio = (id) =>{
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
                console.log(id);
                Axios.delete(`http://localhost:3001/ServiciosEliminar/${id}`).then((response) => {
                    ListaServicios(ListaServicios.filter((val) => {
                        return val.id != id
                    }));
                });
                Swal.fire(
                    'Eliminado',
                    'Servicio elimado de manera correcta',
                    'success',
                ).then(function() {
                    window.location.reload();
                });
                
            }
        })
    };

    // Cambiar la informacion del Servicio
    const ActualizarServicios = (id) => {
        Swal.fire({
            title: '¿Estas seguro de actualizar este servicio?',
            text: "La información actualizada no se podrá recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Actualizar'
        }).then((result) => {
            if (result.isConfirmed) {
                Axios.put('http://localhost:3001/ModificarServicio', {
                    Mid: id,
                    Minfo: formValues.Informacion,
                    MSite: selectedValue,
                })

                Swal.fire(
                    'Actualizado',
                    'El comentario a sido actualizado correctamente',
                    'success'
                ).then(function() {
                    window.location.reload();
                });
                
            }
        })
    };

    return (

        <div>
            {/* Agregar Servicios */}
            <div class="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h3 class="offcanvas-title" id="offcanvasExampleLabel">Agregar Servicio</h3>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div className='container'>
                        <form action='' className='form_comentarios2 d-flex  flex-wrap'>
                        <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingServicio"
                            name="Servicio"
                            onChange={handleChange}
                            placeholder="123"
                            value={formValues.Servicio}
                        />
                        <p className='errors'>{formErrors.Servicio}</p>
                        <label htmlFor="floatingServicio">Servicio</label>
                    </div>
                    <div>
                        <h5>Ubicación del Servicio</h5>
                        <Select
                            name="selectU"
                            placeholder = "Seleccionar"
                            value={data.find(obj => obj.value === selectedValue)}
                            options={data}
                            className="Select-Servicio"
                            onChange={handleChangeS}
                        />
                    </div>
                            <div>
                            <br></br>
                            <button className='submit' onClick={handleSubmit} >Agregar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Tabla para Mostrar Servicios */}
            <div className='container-sm'>
                <span>
                    <h1 id='formsh1'> Administrador de servicios</h1>
                    <button class="btn-offcanvas" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        +
                    </button>
                </span>
                <br />
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th scope="col"> # </th>
                            <th scope="col"> Información </th>
                            <th scope="col"> Ubicación </th>
                            <th scope="col"> Modificar </th>
                            <th scope="col"> Eliminar </th>

                        </tr>
                    </thead>
                    <tbody>
                        {ListaServicios.map((val, key) =>{
                            return (
                                <tr key={autoincrement++}>
                                    <td key={autoincrement++}>{val.idSERVICIOS}</td>
                                    <td key={autoincrement++}>{val.informacion}</td>
                                    <td key={autoincrement++}>{val.lugarU}</td>
                                    <td key={autoincrement++}><a className='btn btn-outline-primary' data-bs-toggle="offcanvas" data-bs-target="#offcanvasPlantilla" aria-controls='offcanvasPlantilla' role="button" onClick={() => BuscarServicio(key)}>Modificar</a></td>
                                    <td key={autoincrement++}><button className='btn btn-danger' onClick={() => {eliminaServicio(val.idSERVICIOS)}}>Eliminar</button></td>
                                </tr>
                            )
                        })}
                        

                    </tbody>
                </table>
            </div>
            
            {/* OffCanvas Space */}
            <div className='offcanvas offcanvas-start' tabIndex="-1" id="offcanvasPlantilla">
                    {/* Título del apartado */}
                    <div className='offcanvas-header'>
                        <h5 className='offcanvas-title' id="ModificarServicio">Modificar Servicio</h5>
                        <button className='btn-close' data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className='offcanvas-body'>
                    <div className='container-sm'>
                    <div className='form-floating mb-3'>
                                <input type="text" 
                                className='form-control' 
                                id="idServ" 
                                name='id'
                                placeholder='123' 
                                value={Servicios.idSERVICIOS} 
                                disabled></input>
                                <label htmlFor="Apellido">Mensaje </label>
                            </div>
                            <div className='form-floating mb-3'>
                                <input type="text" 
                                className='form-control' 
                                id="Info" 
                                name='Informacion'
                                placeholder='123' 
                                value={formValues.Informacion} 
                                onChange={handleChange}></input>
                                <label htmlFor="Apellido">Información </label>
                            </div>
                            
                            <div className='form-floating'>
                            <Select
                                name="selectInfo"
                                placeholder = "Seleccionar"
                                value={data.find(obj => obj.value === selectedValue)}
                                options={data}
                                className="Select-Servicio"
                                onChange={handleChangeS}
                            />
                            </div>
                            <br></br>
                            <button className='btn btn-outline-primary' onClick={() => { ActualizarServicios(Servicios.idSERVICIOS) }}>Actualizar Servicio</button>
                        </div>
                    </div>
                </div>

        </div>



    );

};

export default Agregarserv