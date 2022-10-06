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
     const data = [{ value: 1, label: "Biblioteca Colegio"}, {value: 2, label: "Biblioteca Escuela"}, {value: 3, label: "Seleccionar Ubicación"}];
     const [selectedValue, setSelectedValue] = useState(3);

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
        Axios.get('https://bivic-db-deploy.herokuapp.com/ListaServicios').then((response) => {
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
        
        Axios.post('https://bivic-db-deploy.herokuapp.com/ServiciosR', {
            // Objeto con las propiedades que queremos enviar
            Servicio: values.Servicio,
            Ubicacion: selectedValue,

        }).then(() => {
            //setregisterStatus("Usuario Registrado");
            Swal.fire({
                title:'El servicio se ha registrado correctamente',
                icon: 'success',
            }).then(function() {
                navigate('/');
            });
        })
        
        
        
    };

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
                Axios.delete(`https://bivic-db-deploy.herokuapp.com/UsuariosEliminar/${id}`).then((response)=>{
                    setListaServicios(ListaServicios.filter((val) => {
                        return val.id != id
                    }))
                    window.location.reload();
                
                })
                Swal.fire(
                    'Eliminado',
                    'Servicio elimado de manera correcta',
                    'success'
                );
                
            }
        })
    };

    return (

        <div>
            <div class="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h3 class="offcanvas-title" id="offcanvasExampleLabel">Agregar Servicio</h3>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div className='container'>
                        <form action='' className='form_comentarios2 d-flex  flex-wrap'>
                        <div className="form-floating mb-3-registro">
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
                                    <td key={autoincrement++}>{val.rol}</td>
                                    {/* <td key={autoincrement++}><a className='btn btn-outline-primary' data-bs-toggle="offcanvas" data-bs-target="#offcanvasPlantilla" aria-controls='offcanvasPlantilla' role="button" onClick={() => {BuscarUsuario(val.correo)}}>Modificar</a></td> */}
                                    <td key={autoincrement++}><button className='btn btn-danger' onClick={() => {eliminaUsuario(val.correo)}}>Eliminar</button></td>
                                </tr>
                            )
                        })}
                        

                    </tbody>
                </table>
            </div>
        </div>



    );

};

export default Agregarserv