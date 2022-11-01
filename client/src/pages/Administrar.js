import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Administrar.css';


function Administrar() {
    return (

        <div>
            <div className='serv2'>
                <section id="pasos2">
                    <div className="contenedora2">
                        <div className="contenidos2">
                            <h2 className='administrarh2'>Administrador de Contenido</h2>
                            <div className='btns2'>
                                <button className='btnServicio2 btnAdministrar1'> <a href='/AgregarSabiasQue'> Administrar Sabías Qué</a></button>
                                <button className='btnServicio2 btnAdministrar2' ><a href='/AgregarServicio'>Administrar Servicios</a></button>
                                <button className='btnServicio2 btnAdministrar2' ><a href='/AdministrarComentario'>Administrar Comentarios</a></button>
                                <button className='btnServicio2 btnAdministrar1' ><a href='/AgregarNoticia'>Administrar Noticia </a></button>
                            </div>
                            <div className='btns3'>
                                <Link to="/Administrar/Cuentas">
                                    <button className='btnServicio2 btnAdministrar3' >Administrar Cuentas </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>



    )

}

export default Administrar