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
                            <th scope="col"> Nombre</th>
                            <th scope="col"> Imagen </th>
                            <th scope="col"> Información </th>
                            <th scope="col"> Link </th>
                            <th scope="col"> Modificar </th>
                            <th scope="col"> Eliminar </th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td></td>
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

export default AgregarSabiasQue