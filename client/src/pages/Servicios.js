import React, { useState, useEffect } from 'react'
import '../styles/Servicios.css';
import derecha from '../assets/chevron-right-solid.svg'
import izquierda from '../assets/chevron-left-solid.svg'
import iconoServicio from '../assets/Artboard 72.png'
import iconoServicio2 from '../assets/Artboard 71.png'

import Axios from 'axios';
import Swal from 'sweetalert2';



function Servicios() {
    const [Servicios, setServicios] = useState([]);
    let autoincrement = 0;

    useEffect(() => {
        Axios.get('https://bivic-db-deploy.herokuapp.com/Enlistado').then((response) => {
            setServicios(response.data);
            console.log(response.data)
        });
    }, []);

    return (

        <div>
            <section class="pt-5 pb-5 section-servicios">
                <div class="container">
                    <div class="row">
                        <div class="col-6">
                            <h3 class="h3-servicios mb-3">Servicios de la Biblioteca del Colegio</h3>
                        </div>
                        <div class="col-6 text-right">
                            <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                                <img src={izquierda} className="flecha" />
                            </a>
                            <a class="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                                <img src={derecha} className="flecha" />
                            </a>
                        </div>
                        <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="row">


                                        {Servicios.map((val, key) => {
                                            if (val.lugarU == 1) {
                                                return (
                                                    <div class="col-md-4 mb-3">
                                                        <div key={autoincrement++} class="card">

                                                            <div class="card-body">
                                                                <h4 class="card-title">{val.informacion}</h4> <img src={iconoServicio} className="colegioLibro" />
                                                                <p class="card-text"></p>

                                                            </div>

                                                        </div>
                                                    </div>
                                                )
                                            }

                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="pt-5 pb-5 carousel-escuela">
                <div class="container">
                    <div class="row">
                        <div class="col-6">
                            <h3 class="h3-servicios mb-3">Servicios de la Biblioteca de la Escuela</h3>
                        </div>
                        <div class="col-6 text-right">
                            <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators3" role="button" data-slide="prev">
                                <img src={izquierda} className="flecha" />
                            </a>
                            <a class="btn btn-primary mb-3 " href="#carouselExampleIndicators3" role="button" data-slide="next">
                                <img src={derecha} className="flecha" />
                            </a>
                        </div>
                        <div class="col-12">
                            <div id="carouselExampleIndicators3" class="carousel slide" data-ride="carousel">

                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="row">

                                            {Servicios.map((val, key) => {
                                                if (val.lugarU == 2) {
                                                    return (
                                                        <div class="col-md-4 mb-3">
                                                            <div class="card">
                                                                <div class="card-body">
                                                                    <h4 class="card-title">{val.informacion}</h4><img src={iconoServicio2} className="colegioLibro" />
                                                                    <p class="card-text"></p>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            })}


                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className='btns'>
                <button className='btnServicio' id='agregarserv'><a href="/AgregarServicio">Agregar servicio</a></button>
                <button className='btnServicio' id='adminserv'><a href="/Administrar">Administrar Servicios</a> </button>
            </div> */}
        </div>



    )

}

export default Servicios