import React, { useState, useEffect, Component } from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route, useNavigate } from 'react-router-dom';
import '../styles/Comentarios.css';
import logo from '../assets/comments-xxl.png';
import logodos from '../assets/trash.png';
import logotres from '../assets/edit.png';
import logocuatro from '../assets/calendar.png';
import logocinco from '../assets/user.png';
import Axios from 'axios';
import Moment from 'moment';
import Swal from 'sweetalert2';
import moment from "moment";


function Comentarios() {

    // Variables 
    const initialValues = { Comentario: "" }
    const [ListaComentarios, setListaComentarios] = useState([]);
    const [Comentario, setComentario] = useState([]);
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();
    const [Fechas, setFechas] = useState([]);
    let Email = "2018164@est.cedesdonbosco.ed.cr";
    let err_quantity = 0;
    let autoincrement = 0;

    const handleChange = (e) => {

        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues.Mensaje);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        if (err_quantity == 0) {
            setIsSubmit(true);
            agregarComentario(formValues);
        } else {
            console.log("Validación Incompleta")
        }
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
        Axios.get('http://localhost:3001/ListaComentarios').then((response) => {
            setListaComentarios(response.data);
            
            ListaComentarios.map((val, key) => {
                let fechacomentario = (moment(val.fecha).utc().format('YYYY-MMM-DD'));
                console.log(val.fecha);
                setFechas({...setFechas, [key]: fechacomentario})
                console.log(Fechas);
            })

        });
    }, [formErrors]);

    const validate = (values) => {
        err_quantity = 0
        const errors = {};
        if (!values.Comentario) {
            errors.Comentario = "Se requiere un comentario";
            err_quantity++;
        }

        return errors;
    };

    const eliminaComentario = (id) => {
        Swal.fire({
            title: '¿Estas seguro de eliminar este comentario?',
            text: "No podrás revertir este cambio",
            icon: 'warning',
            showCancelButton: true,
            CalcelButtonText: 'Cancelar',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                Axios.delete(`http://localhost:3001/ComentariosEliminar/${id}`).then((response) => {
                    setListaComentarios(ListaComentarios.filter((val) => {
                        return val.id != id
                    }))
                    window.location.reload();
                });
                Swal.fire(
                    'Eliminado',
                    'El comentario a sido eliminado',
                    'success');

            }
        })
    };

    const BuscarComentario = (puesto) => {
        setComentario(ListaComentarios[puesto]);
        console.log(Comentario);
        setFormValues({...formValues, ["Mensaje"]: Comentario.mensaje});
        
    };

    const agregarComentario = (values) => {

        var formatDate = Moment().format('YYYY-MM-DD kk:mm:ss');

        Axios.post('http://localhost:3001/Comentario', {
            // Objeto con las propiedades que queremos enviar

            Date: formatDate,
            Autor: Email,
            Comentario: values.Comentario,

        }).then(() => {
            //setregisterStatus("Comentario Registrado");
            Swal.fire({
                title: 'El comentario ha sido añadido',
                icon: 'success',
            }).then(function () {
                window.location.reload();
            });
        })



    };

    // Cambiar la informacion del Comentario
    const ActualizarComentario = (id) => {
        Swal.fire({
            title: '¿Estas seguro de actualizar este comentario?',
            text: "La información actualizada no se podrá recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Actualizar'
        }).then((result) => {
            if (result.isConfirmed) {
                Axios.put('http://localhost:3001/ModificarComentario', {
                    Mid: id,
                    Mmessage: formValues.Mensaje,
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
        <div id="comment-section-bg" className='container-lg'>
            <h1>Sección de Comentarios</h1>
            <div id="comment-section" className='container-lg'>

                <div className='row g-2'>
                    <div className='col-md'>
                        <div className="form-floating">
                            <input
                                className="form-control"
                                placeholder="Leave a comment here"
                                id="floatingTextarea2"
                                name="Comentario"
                                onChange={handleChange}
                                value={formValues.Comentario}
                            ></input>
                            <label htmlFor="floatingTextarea2">Añadir un Comentario</label>
                            <p className='errors'>{formErrors.Comentario}</p>
                        </div>
                    </div>
                    <div className='col-md'>
                        <button onClick={handleSubmit} className='submit' id="subir-comentario">
                            <img src={logo} className='imguno'></img>
                        </button>
                    </div>
                </div>

                <div id="muestracomentarios">
                <div className='container-lg'>
                    <div className='row g-2'>
                {ListaComentarios.map((val, key) => {
                            return (
                                <div className='col-md'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>Comentario #{val.idCOMENTARIO}</h5>
                                            <p className='card-text'>
                                                {val.mensaje}
                                            </p>
                                            <p className="card-text"><small className="text-muted"><img src={logocinco} className='delete'></img>{val.persona_correo}</small></p>
                                            <p className="card-text"><small className="text-muted"><img src={logocuatro} className='delete'></img>{val.fecha}</small></p>
                                    <button onClick={() => { eliminaComentario(val.idCOMENTARIO) }} className='btn btn-danger'><img src={logodos} className='delete'></img></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        </div>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Comentarios