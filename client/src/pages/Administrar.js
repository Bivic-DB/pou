import React from 'react'
import '../styles/Administrar.css';


function Administrar() {
    return (

        <div>
            <div className='serv2'>
                <section id="pasos2">
                    <div class="contenedora2">
                        <div class="contenidos2">
                            <h2 className='administrarh2'>Administrador de Contenido</h2>
                            <div class='btns2'>
                                <button  className='btnServicio2 btnAdministrar1'> <a href='/AgregarSabiasQue'> Administrar Sabías Qué</a></button>
                                <button className='btnServicio2 btnAdministrar2' ><a href='/AgregarServicio'>Administrar servicio</a></button>
                                <button className='btnServicio2 btnAdministrar2' ><a href='/AdministrarComentario'>Administrar Comentarios</a></button>
                                <button className='btnServicio2 btnAdministrar1' ><a href='/AgregarNoticia'>Administrar Noticia </a></button>
                            </div>
                            <div className='btns3'>
                                <button className='btnServicio2 btnAdministrar3' >Administrar Cuentas </button>
                                </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>



    )

}

export default Administrar