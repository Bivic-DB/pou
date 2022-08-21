import React from 'react'
import '../styles/FormsAdministrar.css';


function AgregarNoticia() {
    return (

        <div>
            <div className='container'>
                <div className='row comentarios2 justify-content-center'>
                    <div className='col-6'>
                        <h1 className='h1comentarios2'>Agregar Noticia</h1>
                        <form action='' className='form_comentarios2 d-flex  flex-wrap'>
                            <h2 className='h2AgregarServicios'>Título</h2>
                            <input type={"text"} name="" id='' placeholder='Título'></input>
                            <h2 className='h2AgregarServicios'>Información</h2>
                            <input type={"text"} name="" id='' placeholder='Información'></input>
                            <h2 className='h2AgregarServicios'>Imagen en Carrusel</h2>
                            <input type={"file"} name="" id='' placeholder='Imagen en Carrusel'></input>
                            <h2 className='h2AgregarServicios'>Imagenes Extra</h2>
                            <input type={"file"} name="" id='' placeholder='Imagenes Extra'></input>
                            <h2 className='h2AgregarServicios'>Fecha</h2>
                            <input type={"date"} name="" id='' placeholder='Fecha'></input>
                            <button className='btn' type='button'>Agregar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>



    )

}

export default AgregarNoticia