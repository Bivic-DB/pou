import React, { Fragment, useState, useEffect } from 'react'
import '../styles/FormsAdministrar.css';
import Axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Moment from 'moment';
import { convertBase64 } from '../helpers/Utils.js'
import { test } from '../helpers/Utils.js'
import { displayImage } from '../helpers/Utils.js'

function AgregarNoticia() {

    const initialValues = { Titulo: "", fechasalida: "", informacion: "" }
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [imagebase64, setBase64] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();
    let autoincrement = 0;
    const [ListaNoticias, setListaNoticias] = useState([]);
    let err_quantity = 0;
    let Noticia;
    const [Noticias, setNoticias] = useState([]);

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

    function readURL(input) {
        var reader = new FileReader();
        reader.onload = function (e) {
            setBase64(e.target.result);
        }
        reader.readAsDataURL(input);
    }
    const agregarNoticia = (values) => {
        var formatDate = Moment().format('YYYY-MM-DD');
        console.log(imagebase64)
        Axios.post('http://localhost:3001/AgregarNoticia', {
            // Objeto con las propiedades que queremos enviar
            Titulo: values.Titulo,
            fechasalida: values.fechasalida,
            informacion: values.informacion,
            fechaentrada: "2022-06-09",
            fotoentrada: imagebase64

        }).then(() => {
            //setregisterStatus("Usuario Registrado");
            Swal.fire({
                title: 'La noticia se ha registrado correctamente',
                icon: 'success',
            }).then(function () {
                window.location.reload();
            });
        })
    };
    console.log(ListaNoticias);
    console.log(formValues.fechasalida);
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
                Axios.delete(`http://localhost:3001/NoticiaEliminar/${id}`).then((response) => {
                    setListaNoticias(ListaNoticias.filter((val) => {
                        return val.id != id
                    }))

                })
                Swal.fire(
                    'Eliminado',
                    'Noticia eliminada de manera correcta',
                    'success'
                ).then(function () {
                    window.location.reload();
                })

            }
        })
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
        Axios.get('http://localhost:3001/ListaNoticias').then((response) => {
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
        readURL(e.target.files[0]);
        //console.log(e.target.files[0])
    }

    const BuscarNoticia = (puesto) => {
        setNoticias(ListaNoticias[puesto]);
        console.log(Noticias);
        setFormValues({ ...formValues, ["Titulo"]: Noticias.titulo, ["informacion"]: Noticias.informacion , ["fechasalida"]: Noticias.fechasalida});

    };

    // Cambiar la informacion del Comentario
    const ActualizarNoticia = (id) => {
        Swal.fire({
            title: '¿Estas seguro de actualizar esta noticia?',
            text: "La información actualizada no se podrá recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Actualizar'
        }).then((result) => {
            if (result.isConfirmed) {
                Axios.put('http://localhost:3001/ModificarNoticia', {
                    Mid: id,
                    MTitulo: formValues.Titulo,
                    Minformacion: formValues.informacion,
                    Mfechasalida: formValues.fechasalida,
                    fotoentrada: imagebase64

                })

                Swal.fire(
                    'Actualizado',
                    'La noticia a sido actualizada correctamente',
                    'success'
                ).then(function () {
                    window.location.reload();
                });

            }
        })
    };

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
                                    type="text"
                                    className="form-control"
                                    id="floatinginfechasalida"
                                    name="fechasalida"
                                    onChange={handleChange}
                                    placeholder="YYYY-MM-DD"
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
                    <button className="btn-offcanvas" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
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
                            <th scope="col"> Modificar </th>
                            <th scope="col"> Eliminar </th>

                        </tr>
                    </thead>
                    <tbody>

                        {ListaNoticias.map((val, key) => {
                            console.log(val.baseimagen);
                            return (
                                <tr key={autoincrement++}>
                                    <td key={autoincrement++}>{val.titulo}</td>
                                    <td key={autoincrement++}>{val.informacion}</td>
                                    <td key={autoincrement++}><img src={val.baseimagen} height="200px"></img></td>
                                    <td key={autoincrement++}>{val.fechasalida}</td>
                                    <td key={autoincrement++}><a className='btn btn-outline-primary' data-bs-toggle="offcanvas" data-bs-target="#offcanvasPlantilla" aria-controls='offcanvasPlantilla' role="button" onClick={() => BuscarNoticia(key)}>Modificar</a></td>
                                    <td key={autoincrement++}><button className='btn btn-danger' onClick={() => { eliminaNoticia(val.idNOTICIA) }}>Eliminar</button></td>
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
                    <h5 className='offcanvas-title' id="ModificarUsuario">Modificar Noticia</h5>
                    <button className='btn-close' data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className='offcanvas-body'>
                    <div className='container-sm'>

                        <div className='form-floating mb-3'>
                            <input type="text" className='form-control' id="nombre" placeholder='123' value={Noticias.idNOTICIA} disabled></input>
                            <label htmlFor="nombre"># Noticia </label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input type="text"
                                className='form-control'
                                id="Titulo"
                                name='Titulo'
                                placeholder='123'
                                value={formValues.Titulo}
                                onChange={handleChange}
                            ></input>
                            <label htmlFor="Titulo">Titulo </label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input type="text"
                                className='form-control'
                                id="informacion"
                                name='informacion'
                                placeholder='123'
                                value={formValues.informacion}
                                onChange={handleChange}
                            ></input>
                            <label htmlFor="informacion">Informacion </label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input type="text"
                                className='form-control'
                                id="fechasalida"
                                name='fechasalida'
                                placeholder='123'
                                value={formValues.fechasalida}
                                onChange={handleChange}
                            ></input>
                            <label htmlFor="fechasalida">Fecha Salida </label>
                        </div>
                        <div className='mb-3-registro'>
                                <h5 className='h4AgregarServicios'>Imagen</h5>
                                <input type={"file"} onChange={selectedHandler} name="" id='' placeholder='Imagen en Carrusel'></input>
                                <p className='errors'>{formErrors.File}</p>
                            </div>
                        <br></br>
                        <button className='btn btn-outline-primary' onClick={() => { ActualizarNoticia(Noticias.idNOTICIA) }}>Actualizar Noticia</button>
                    </div>
                </div>
            </div>

        </div>


    )

}

export default AgregarNoticia