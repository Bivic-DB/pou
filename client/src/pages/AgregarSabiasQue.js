import React from 'react'
import '../styles/FormsAdministrar.css';


function AgregarSabiasQue() {
    return (

        <div>
            <div className='container'>
                <div className='row comentarios2 justify-content-center'>
                    <div className='col-6'>
                        <h1 className='h1comentarios2'>Agregar Sabías Qué</h1>
                        <form action='' className='form_comentarios2 d-flex  flex-wrap'>
                            <h2 className='h2AgregarServicios'>Nombre</h2>
                            <input type={"text"} name="" id='' placeholder='Nombre'></input>
                            <h2 className='h2AgregarServicios'>Imagen</h2>
                            <input type={"file"} name="" id='' placeholder='# de Servicio'></input>
                            <h2 className='h2AgregarServicios'>Información</h2>
                            <input type={"text"} name="" id='' placeholder='Información'></input>
                            <h2 className='h2AgregarServicios'>Link</h2>
                            <input type={"text"} name="" id='' placeholder='Link'></input>
                            <button className='btn' type='button'>Agregar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>



    )

}

export default AgregarSabiasQue