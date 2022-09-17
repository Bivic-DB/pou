import React from 'react'
import '../styles/FormsAdministrar.css';


function AgregarSabiasQue() {
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
                            <h4 className='h4AgregarServicios'>Nombre</h4>
                            <input type={"text"} name="" id='' placeholder='Nombre'></input>
                            <h4 className='h4AgregarServicios'>Imagen</h4>
                            <input type={"file"} name="" id='' placeholder='# de Servicio'></input>
                            <h4 className='h4AgregarServicios'>Información</h4>
                            <input type={"text"} name="" id='' placeholder='Información'></input>
                            <h4 className='h4AgregarServicios'>Link</h4>
                            <input type={"text"} name="" id='' placeholder='Link'></input>
                            <button className='btn' type='button'>Agregar</button>
                        </form>
            </div>
  </div>
</div>

<button class="btn-offcanvas" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
Agregar
</button>
        </div>



    )

}

export default AgregarSabiasQue