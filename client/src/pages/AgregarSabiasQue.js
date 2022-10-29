import React, { Fragment, useState, useEffect } from 'react'
import '../styles/FormsAdministrar.css';
import Axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Moment from 'moment';
import {convertBase64} from '../helpers/Utils.js'
import {displayImage} from '../helpers/Utils.js'


function AgregarSabiasQue() {
    const initialValues = { Descripcion: "", InformacionC: "", Link: "", FechaSalida: ""}
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();
    let autoincrement = 0;
    const [ListaSabiasQ, setListaSabiasQ] = useState([]);
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
            agregarSabiasQ(formValues);
        } else {
            console.log("Validación Incompleta")
        }

    };

    const agregarSabiasQ = (values) => {

        var formatDate = Moment().format('YYYY-MM-DD');
        Axios.post('https://bivic-db-deploy.herokuapp.com/AgregarSabiasQ', {
            // Objeto con las propiedades que queremos enviar
            Descripcion: values.Descripcion,
            fechasalida: "2022/08/06",
            informacionC: values.InformacionC,
            fechaentrada: formatDate,
            Link: values.Link,
            fotoentrada: String(convertBase64(File))

        }).then(() => {
            //setregisterStatus("Usuario Registrado");
            Swal.fire({
                title: 'La información se ha registrado correctamente',
                icon: 'success',
            }).then(function () {
                navigate('/');

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
                    Axios.delete(`https://bivic-db-deploy.herokuapp.com/SabiasQEliminar/${id}`).then((response) => {
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
        Axios.get('https://bivic-db-deploy.herokuapp.com/ListaSabiasQ').then((response) => {
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
        //console.log(e.target.files[0])
    }

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
                                    id="Desc"
                                    name="Titulo"
                                    onChange={handleChange}
                                    placeholder="123"
                                    value={formValues.Descripcion}
                                />
                                <p className='errors'>{formErrors.Descripcion}</p>
                                <label htmlFor="Desc">Descripción</label>
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
                            <div className="form-floating mb-3-registro">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="FechaSalida"
                                    name="FechaSalida"
                                    onChange={handleChange}
                                    placeholder="123"
                                    value={formValues.FechaSalida}
                                />
                                <p className='errors'>{formErrors.FechaSalida}</p>
                                <label htmlFor="InformacionC"> Fecha de Finalización </label>
                            </div>
                            <div>
                            <button className='submit'>Agregar</button>
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
                            {/* <th scope="col"> Imagen </th> */}
                            <th scope="col"> Información </th>
                            <th scope="col"> Link </th>
                            {/* <th scope="col"> Modificar </th> */}
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
                                    {/* <td key={autoincrement++}><a className='btn btn-outline-primary' data-bs-toggle="offcanvas" data-bs-target="#offcanvasPlantilla" aria-controls='offcanvasPlantilla' role="button" onClick={BuscarNoticia(val.idNOTICIA, val.titulo, val.fechasalida, val.informacion)}>Modificar</a></td> */}
                                    <td key={autoincrement++}><button className='btn btn-danger' onClick={() => { eliminaSabiasQ(val.idSABIASQ) }}>Eliminar</button></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>

            </div>
        </div>


    )

}

export default AgregarSabiasQue