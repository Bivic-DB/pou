import React from 'react'
import '../styles/FormsAdministrar.css';


function agregarserv() {
    return (

        <div>
            <div className='container'>
                <div className='row comentarios2 justify-content-center'>
                    <div className='col-6'>
                        <h1 className='h1comentarios2'>Agregar Servicios</h1>
                        <form action='' className='form_comentarios2 d-flex  flex-wrap'>
                            <h2 className='h2AgregarServicios'>Nombre del Servicio</h2>
                            <input type={"text"} name="" id='' placeholder='Nombre del Servicio'></input>
                            <h2 className='h2AgregarServicios'># de Servicio</h2>
                            <input type={"number"} name="" id='' placeholder='# de Servicio'></input>
                            <h2 className='h2AgregarServicios'>Ubicacion del Servicio</h2>
                            <input type={"text"} name="" id='' placeholder='Ubicacion del Servicio'></input>
                            <button className='btn' type='button'>Agregar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>



    )

}

export default agregarserv