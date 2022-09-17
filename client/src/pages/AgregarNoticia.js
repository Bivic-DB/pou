import React from 'react'
import '../styles/FormsAdministrar.css';


function AgregarNoticia() {
    return (

        <div>
          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h4 class="offcanvas-title" id="offcanvasExampleLabel">Agregar Noticia</h4>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <div className='container'>
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

<button class="btn-offcanvas" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Button with data-bs-target
</button>
        </div>



    )

}

export default AgregarNoticia