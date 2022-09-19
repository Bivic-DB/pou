import React from 'react'
import '../styles/FormsAdministrar.css';


function AdministrarComentario() {
    return (

        <div>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title" id="offcanvasExampleLabel">Administrar comentario</h3>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <div className='container'>
                        <form action='' className='form_comentarios2 d-flex  flex-wrap'>
                            <input type={"number"} name="" id='' placeholder='#N comentario'></input>
                            <h4 className='h4AgregarServicios'>Autor</h4>
                            <input type={"text"} name="" id='' placeholder='Autor'></input>
                            <h4 className='h4AgregarServicios'>Fecha</h4>
                            <input type={"date"} name="" id='' placeholder='Fecha'></input>
                            <h4 className='h4AgregarServicios'>Texto</h4>
                            <input type={"text"} name="" id='' placeholder='Texto'></input>
                            <button className='btn' type='button'>Agregar</button>
                        </form>
            </div>
  </div>
</div>

<button class="btn-offcanvas" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
Agregar
</button>
<div className='container-sm'>
<h1> Administrador de comentarios</h1>

                <br/>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th scope="col"> Autor</th>
                            <th scope="col"> Fecha </th>
                            <th scope="col"> Texto </th>
                            <th scope="col"> Modificar </th>
                            <th scope="col"> Eliminar </th>

                        </tr>
                    </thead>
                    <tbody>
                
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><a className='btn btn-outline-primary' data-bs-toggle="offcanvas" data-bs-target="#offcanvasPlantilla" aria-controls='offcanvasPlantilla' role="button">Modificar</a></td>
                                    <td><button className='btn btn-danger'>Eliminar</button></td>
                                </tr>
                           
                    </tbody>
                </table>
        </div>
        </div>


    )

}

export default AdministrarComentario