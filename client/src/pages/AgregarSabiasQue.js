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


function AgregarSabiasQue() {

    const initialValues = { Descripcion: "", InformacionC: "", Link: "", FechaSalida: ""}
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [imagebase64, setBase64] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();
    let autoincrement = 0;
    const [ListaSabiasQ, setListaSabiasQ] = useState([]);
    let err_quantity = 0;
    const [SabiasQ, setSabiasQ] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        if (err_quantity == 0) {
            setIsSubmit(true);
            agregarSabiasQ(formValues);
        } else {
            console.log("Validación Incompleta")
        }
    };

    const agregarSabiasQ = (values) => {

        var formatDate = Moment().format('YYYY-MM-DD');

        Axios.post('http://localhost:3001/AgregarSabiasQ', {
            // Objeto con las propiedades que queremos enviar
            Descripcion: values.Descripcion,
            fechasalida: values.FechaSalida,
            informacionC: values.InformacionC,
            fechaentrada: formatDate,
            Link: values.Link,
            fotoentrada: imagebase64

        }).then(() => {
            //setregisterStatus("Usuario Registrado");
            Swal.fire({
                title: 'La información se ha registrado correctamente',
                icon: 'success',
            }).then(function () {
                window.location.reload();
            });
        })
    };

        // funcion para eliminar usuarios
        const eliminaSabiasQ = (id) => {
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
                    Axios.delete(`http://localhost:3001/SabiasQEliminar/${id}`).then((response) => {
                        setListaSabiasQ(ListaSabiasQ.filter((val) => {
                            return val.id != id
                        }))
                        
                    })
                    Swal.fire(
                        'Eliminado',
                        'Sabias Qué eliminada de manera correcta',
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
        Axios.get('http://localhost:3001/ListaSabiasQ').then((response) => {
            setListaSabiasQ(response.data);
        });
    }, [formErrors]);



    const validate = (values) => {
        err_quantity = 0
        
    };

    const [File, setFile] = useState();
    const selectedHandler = (e) => {
        //setFile(convertBase64(e.target.files[0]));
        setFile(e.target.files[0]);
        readURL(e.target.files[0]);
        //console.log(e.target.files[0])
    }

    function readURL(input) {
        var reader = new FileReader();
        reader.onload = function (e) {
            setBase64(e.target.result);
        }
        reader.readAsDataURL(input);
    }
    const BuscarSabiasQ = (puesto) => {
        setSabiasQ(ListaSabiasQ[puesto]);
        console.log(SabiasQ);
        setFormValues({ ...formValues, ["Descripcion"]: SabiasQ.descripcion, ["info"]: SabiasQ.informacioncomplementaria , ["fechasalida"]: SabiasQ.fechasalida, ["link"]: SabiasQ.link});

    };
    // Cambiar la informacion del Comentario
    const ActualizarSabiasQ = (id) => {
        console.log(imagebase64);
        Swal.fire({
            title: '¿Estas seguro de actualizar la información?',
            text: "La información actualizada no se podrá recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Actualizar'
        }).then((result) => {
            if (result.isConfirmed) {
                Axios.put('http://localhost:3001/ModificarSabiasQ', {
                    Mid: id,
                    MDesc: formValues.Descripcion,
                    Minformacion: formValues.info,
                    Mfechasalida: formValues.fechasalida,
                    Mlink: formValues.link,
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
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h3 class="offcanvas-title" id="offcanvasExampleLabel">Agregar Sabías Qué</h3>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div className='container'>
                        <form action='' className='form_comentarios2 d-flex  flex-wrap'>
                        <div className="form-floating mb-3-registro">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingSabiasQ"
                            name="descripcion"
                            onChange={handleChange}
                            placeholder="123"
                            value={formValues.descripcion}
                        />
                        <p className='errors'>{formErrors.Descripcion}</p>
                        <label htmlFor="floatingSabiasQ">Descripcion</label>
                            </div>
                            <div className="form-floating mb-3-registro">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="InformacionC"
                                    name="InformacionC"
                                    onChange={handleChange}
                                    placeholder="123"
                                    value={formValues.InformacionC}
                                />
                                <p className='errors'>{formErrors.InformacionC}</p>
                                <label htmlFor="InformacionC">Información Complementaria</label>
                            </div>
                            <div className="form-floating mb-3-registro">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Link"
                                    name="Link"
                                    onChange={handleChange}
                                    placeholder="123"
                                    value={formValues.Link}
                                />
                                <p className='errors'>{formErrors.Link}</p>
                                <label htmlFor="Link">Link Complementario*</label>
                            </div>
                            <div className="mb-3-registro">
                                <label htmlFor="InformacionC"> Fecha de Finalización </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="FechaSalida"
                                    name="FechaSalida"
                                    onChange={handleChange}
                                    placeholder="YYYY-MM-DD"
                                    value={formValues.FechaSalida}
                                />
                                <p className='errors'>{formErrors.FechaSalida}</p>
                                
                            </div>
                            <div className='mb-3-registro'>
                                <h5 className='h4AgregarServicios'>Imagen</h5>
                                <input type={"file"} onChange={selectedHandler} name="" id='' placeholder='Imagen en Carrusel'></input>
                                <p className='errors'>{formErrors.File}</p>
                            </div>
                            <div>
                            <button className='submit' onClick={handleSubmit}>Agregar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className='container-sm'>
                <span>
                    <h1 id='formsh1'> Administrador de Sabias Qué</h1>
                    <button class="btn-offcanvas" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        +
                    </button>
                </span>
                <br />
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th scope="col"> Descripcion </th>
                            <th scope="col"> Información </th>
                            <th scope="col"> Link </th>
                            <th scope="col"> Fecha Salida </th>
                            <th scope="col"> Imagen </th>
                            <th scope="col"> Modificar </th>
                            <th scope="col"> Eliminar </th>

                        </tr>
                    </thead>
                    <tbody>

                    {ListaSabiasQ.map((val, key) => {
                            return (
                                <tr key={autoincrement++}>
                                    <td key={autoincrement++}>{val.descripcion}</td>
                                    <td key={autoincrement++}>{val.informacioncomplementaria}</td>
                                    <td key={autoincrement++}>{val.link}</td>
                                    <td key={autoincrement++}>{val.fechasalida}</td>
                                    <td key={autoincrement++}><img src={val.baseimagen} height="200px"></img></td>
                                    <td key={autoincrement++}><a className='btn btn-outline-primary' data-bs-toggle="offcanvas" data-bs-target="#offcanvasPlantilla" aria-controls='offcanvasPlantilla' role="button" onClick={() => BuscarSabiasQ(key)}>Modificar</a></td>
                                    <td key={autoincrement++}><button className='btn btn-danger' onClick={() => { eliminaSabiasQ(val.idSABIASQ) }}>Eliminar</button></td>
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
                    <h5 className='offcanvas-title' id="ModificarUsuario">Modificar Sabias Qué</h5>
                    <button className='btn-close' data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className='offcanvas-body'>
                    <div className='container-sm'>

                        <div className='form-floating mb-3'>
                            <input type="text" className='form-control' id="nombre" placeholder='123' value={SabiasQ.idSABIASQ} disabled></input>
                            <label htmlFor="nombre"># Sabias Qué </label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input type="text"
                                className='form-control'
                                id="Descripcion"
                                name='Descripcion'
                                placeholder='123'
                                value={formValues.Descripcion}
                                onChange={handleChange}
                            ></input>
                            <label htmlFor="Descripcion">Descripción </label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input type="text"
                                className='form-control'
                                id="info"
                                name='info'
                                placeholder='123'
                                value={formValues.info}
                                onChange={handleChange}
                            ></input>
                            <label htmlFor="info">Informacion Complementaria </label>
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
                        <div className='form-floating mb-3'>
                            <input type="text"
                                className='form-control'
                                id="link"
                                name='link'
                                placeholder='123'
                                value={formValues.link}
                                onChange={handleChange}
                            ></input>
                            <label htmlFor="link">Link</label>
                        </div>
                        <div className='mb-3-registro'>
                                <h5 className='h4AgregarServicios'>Imagen</h5>
                                <input type={"file"} onChange={selectedHandler} name="" id='' placeholder='Imagen en Carrusel'></input>
                                <p className='errors'>{formErrors.File}</p>
                            </div>
                        <br></br>
                        <button className='btn btn-outline-primary' onClick={() => { ActualizarSabiasQ(SabiasQ.idSABIASQ) }}>Actualizar Sabias Qué</button>
                    </div>
                </div>
            </div>

        </div>


    )

}

export default AgregarSabiasQue