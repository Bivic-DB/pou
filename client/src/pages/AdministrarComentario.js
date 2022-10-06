import React, { useState, useEffect } from 'react'
import '../styles/FormsAdministrar.css';
import Swal from 'sweetalert2';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Moment from 'moment';

function AdministrarComentario() {
    
    // 
    const initialValues = { Comentario: "" }
    const [ListaComentarios, setListaComentarios] = useState([]);
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    // Variables
    let Email = "2018164@est.cedesdonbosco.ed.cr";
    let err_quantity = 0;
    let autoincrement = 0;
    
    
    // When the input changes value changes
    const handleChange = (e) => {
        
        const {name, value} = e.target;
        setFormValues({...formValues, [name]:value });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        if(err_quantity==0){
            setIsSubmit(true);
            agregarComentario(formValues);
        }else{
            console.log("Validación Incompleta")
        }
    }

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
        }
        Axios.get('https://bivic-db-deploy.herokuapp.com/ListaComentarios').then((response) => {
            setListaComentarios(response.data);
            console.log(response.data);
        });
    }, [formErrors]);

    const validate = (values) => {
        err_quantity = 0
        const errors = {};
        if(!values.Comentario){
            errors.Comentario = "Se requiere un comentario";
            err_quantity++;
        }
        
        return errors;
    };

    const eliminaComentario = (id) =>{
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
                Axios.delete(`https://bivic-db-deploy.herokuapp.com/ComentariosEliminar/${id}`).then((response)=>{
                    setListaComentarios(ListaComentarios.filter((val) =>{
                        return val.id != id
                    }))
                });
                Swal.fire(
                    'Eliminado',
                    'El comentario a sido eliminado',
                    'success'
                );
                
            }
        })
    };

    const agregarComentario = (values) => {

        var formatDate = Moment().format('YYYY-MM-DD kk:mm:ss');
        
        Axios.post('https://bivic-db-deploy.herokuapp.com/Comentario', {
            // Objeto con las propiedades que queremos enviar
            
            Date: formatDate,
            Autor: Email,
            Comentario: values.Comentario,

        }).then(() => {
            //setregisterStatus("Usuario Registrado");
            Swal.fire({
                title:'El comentario ha sido añadido',
                icon: 'success',
            }).then(function() {
                window.location.reload();
            });
        })
        
        
        
    };

    return (

        <div>
            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h3 className="offcanvas-title" id="offcanvasExampleLabel">Agregar comentario</h3>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className='container'>
                        <form action='' className='form_comentarios2 d-flex  flex-wrap'>
                            {/* Input Comentario */}
                            <div className="form-floating mb-3-comentario">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingComentario"
                                    name="Comentario"
                                    onChange={handleChange}
                                    placeholder="123"
                                    value={formValues.Comentario}
                                />
                                <p className='errors'>{formErrors.Comentario}</p>
                                <label htmlFor="floatingComentario">Comentario</label>
                            </div>
                            <div>
                                <button className='submit' onClick={handleSubmit} >Agregar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className='container-sm'>
                <span>
                    <h1 id='formsh1'> Administrador de comentarios</h1>

                    <button className="btn-offcanvas" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        +
                    </button>
                </span>
                <br />
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th scope='col'> # </th>
                            <th scope="col"> Autor</th>
                            <th scope="col"> Fecha </th>
                            <th scope="col"> Texto </th>
                            <th scope="col"> Eliminar </th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* Mapeo de Comentarios */}
                        {ListaComentarios.map((val, key) =>{
                            return (
                                <tr key={autoincrement++}>
                                    <td key={autoincrement++}>{val.idCOMENTARIO}</td>
                                    <td key={autoincrement++}>{val.persona_correo}</td>
                                    <td key={autoincrement++}>{val.fecha}</td>
                                    <td key={autoincrement++}>{val.mensaje}</td>
                                    <td><button onClick={() => {eliminaComentario(val.idCOMENTARIO)}} className='btn btn-danger'>Eliminar</button></td>
                                </tr>
                            )
                        })}
                        

                    </tbody>
                </table>
            </div>
        </div>


    )

}

export default AdministrarComentario