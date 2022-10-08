import React, { Fragment, useState, useEffect } from 'react'
import '../styles/FormsAdministrar.css';
import Axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Moment from 'moment';
import {convertBase64} from '../helpers/Utils.js'
import {displayImage} from '../helpers/Utils.js'

function AgregarNoticia() {


    const initialValues = { Titulo: "", fechasalida: "", informacion: ""}
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();
    let autoincrement = 0;
    const [ListaNoticias, setListaNoticias] = useState([]);
    let err_quantity = 0;
    let Noticia;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        if (err_quantity == 0) {
            setIsSubmit(true);
            agregarNoticia(formValues);
        } else {
            console.log("Validación Incompleta")
        }

    };

    const agregarNoticia = (values) => {

        var formatDate = Moment().format('YYYY-MM-DD');
        Axios.post('https://bivic-db-deploy.herokuapp.com/AgregarNoticia', {
            // Objeto con las propiedades que queremos enviar
            Titulo: values.Titulo,
            fechasalida: values.fechasalida,
            informacion: values.informacion,
            fechaentrada: "2022/06/09",
            fotoentrada: String(convertBase64(File))

        }).then(() => {
            //setregisterStatus("Usuario Registrado");
            Swal.fire({
                title: 'La noticia se ha registrado correctamente',
                icon: 'success',
            }).then(function () {
                navigate('/');

            });
        })
    };
    const BuscarNoticia = (idNOTICIA, titulo, fechasalida, informacion) => {
        Noticia = [idNOTICIA, titulo, fechasalida, informacion];
    };
        // funcion para eliminar usuarios
        const eliminaNoticia = (id) => {
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
                    Axios.delete(`https://bivic-db-deploy.herokuapp.com/NoticiaEliminar/${id}`).then((response) => {
                        setListaNoticias(ListaNoticias.filter((val) => {
                            return val.id != id
                        }))
                        
                    })
                    Swal.fire(
                        'Eliminado',
                        'Noticia eliminada de manera correcta',
                        'success'
                    ).then(function() {
                        window.location.reload();
                    })
    
                }
            })
        };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
        Axios.get('https://bivic-db-deploy.herokuapp.com/ListaNoticias').then((response) => {
            setListaNoticias(response.data);
        });
    }, [formErrors]);

    const validate = (values) => {
        err_quantity = 0
        const errors = {};

        if (!values.Titulo) {
            errors.Titulo = "Se requiere un titulo";
            err_quantity++;
        }
        if (!values.fechasalida) {
            errors.fechasalida = "Se requiere una fecha";
            err_quantity++;
        }
        if (!values.informacion) {
            errors.informacion = "Se requiere informacion";
            err_quantity++;
        }
        if (!File) {
            errors.File = "Se requiere una Imagen";
            err_quantity++;
        }

        return errors;
    };

    const [File, setFile] = useState();
    const selectedHandler = (e) => {
        //setFile(convertBase64(e.target.files[0]));
        setFile(e.target.files[0]);
        //console.log(e.target.files[0])
    }

    return (

        <div>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h3 className="offcanvas-title" id="offcanvasExampleLabel">Agregar Noticia</h3>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className='container'>
                        <form action='' className='form_comentarios2 d-flex  flex-wrap'>
                            <div className="form-floating mb-3-registro">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingTitulo"
                                    name="Titulo"
                                    onChange={handleChange}
                                    placeholder="123"
                                    value={formValues.Titulo}
                                />
                                <p className='errors'>{formErrors.Titulo}</p>
                                <label htmlFor="floatingTitulo">Título Noticia</label>
                            </div>
                            <div className="form-floating mb-3-registro">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatinginformacion"
                                    name="informacion"
                                    onChange={handleChange}
                                    placeholder="123"
                                    value={formValues.informacion}
                                />
                                <p className='errors'>{formErrors.informacion}</p>
                                <label htmlFor="floatinginformacion">Información Noticia</label>
                            </div>
                            <div className="mb-3-registro">
                                <h5 className='h4AgregarServicios'>Fecha</h5>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="floatinginfechasalida"
                                    name="fechasalida"
                                    data-date-format= "YYYY/MM/DD"
                                    onChange={handleChange}
                                    placeholder="123"
                                    value={formValues.fechasalida}
                                />
                                <p className='errors'>{formErrors.fechasalida}</p>
                            </div>
                            <div className='mb-3-registro'>
                                <h5 className='h4AgregarServicios'>Imagen</h5>
                                <input type={"file"} onChange={selectedHandler} name="" id='' placeholder='Imagen en Carrusel'></input>
                                <p className='errors'>{formErrors.File}</p>
                            </div>
                            <div>
                                <br></br>
                                <button onClick={handleSubmit} className='submit'>Agregar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className='container-sm'>
                <span>
                    <h1 id='formsh1'> Administrador de noticias</h1>
                    <button class="btn-offcanvas" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        +
                    </button>
                </span>
                <br />
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th scope="col"> Título</th>
                            <th scope="col"> Información </th>
                            <th scope="col"> Imagen </th>
                            <th scope="col"> Fecha Salida </th>
                            {/* <th scope="col"> Modificar </th> */}
                            <th scope="col"> Eliminar </th>

                        </tr>
                    </thead>
                    <tbody>

                       {ListaNoticias.map((val, key) => {
                            return (
                                <tr key={autoincrement++}>
                                    <td key={autoincrement++}>{val.titulo}</td>
                                    <td key={autoincrement++}>{val.informacion}</td>
                                    <td key={autoincrement++}>{val.baseimagen}</td>
                                    <td key={autoincrement++}>{val.fechasalida}</td>
                                    {/* <td key={autoincrement++}><a className='btn btn-outline-primary' data-bs-toggle="offcanvas" data-bs-target="#offcanvasPlantilla" aria-controls='offcanvasPlantilla' role="button" onClick={BuscarNoticia(val.idNOTICIA, val.titulo, val.fechasalida, val.informacion)}>Modificar</a></td> */}
                                    <td key={autoincrement++}><button className='btn btn-danger' onClick={() => { eliminaNoticia(val.idNOTICIA) }}>Eliminar</button></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>



    )

}

export default AgregarNoticia