import React from 'react'
import '../styles/FormsAdministrar.css';


function AdministrarComentario() {
    return (

        <div>
            <div className='container'>
                <div className='row comentarios2 justify-content-center'>
                    <div className='col-6'>
                        <h1 className='h1comentarios2'>Administrar Comentarios</h1>
                        <form action='' className='form_comentarios2 d-flex  flex-wrap'>
                            <h2 className='h2AgregarServicios'>#N comentario</h2>
                            <input type={"number"} name="" id='' placeholder='#N comentario'></input>
                            <h2 className='h2AgregarServicios'>Autor</h2>
                            <input type={"text"} name="" id='' placeholder='Autor'></input>
                            <h2 className='h2AgregarServicios'>Fecha</h2>
                            <input type={"date"} name="" id='' placeholder='Fecha'></input>
                            <h2 className='h2AgregarServicios'>Texto</h2>
                            <input type={"text"} name="" id='' placeholder='Texto'></input>
                            <button className='btn' type='button'>Agregar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>



    )

}

export default AdministrarComentario