import React from 'react'
import '../styles/Servicios.css';
import derecha from '../assets/chevron-right-solid.svg'
import izquierda from '../assets/chevron-left-solid.svg' 
import iconoServicio from '../assets/Artboard 72.png'
import iconoServicio2 from '../assets/Artboard 71.png'
import iconoServicio3 from '../assets/Artboard 73.png'
import iconoServicio4 from '../assets/Artboard 74.png'
import iconoServicio5 from '../assets/Artboard 75.png'


function Servicios() {
    return (

        <div>
         <section class="pt-5 pb-5">
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
            <div class="col-12">
                <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                    
                                        <div class="card-body">
                                            <h4 class="card-title">Libros</h4> <img src={iconoServicio} className="colegioLibro" />
                                            <p class="card-text">Préstamo de libros en digital y físico.</p>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title">Material Didáctico</h4> <img src={iconoServicio} className="colegioLibro" />
                                            <p  class="card-text p-servicio">Préstamo de material didáctico</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title">Préstamo de computadoras</h4> <img src={iconoServicio} className="colegioLibro" />
                                            <p class="card-text">Préstamo de computadoras para realización de trabajos o búsqueda de información.</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title">Préstamo de Videos</h4><img src={iconoServicio} className="colegioLibro" />
                                            <p class="card-text">Préstamo de Videos informativos</p>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title">Préstamo de calculadoras</h4><img src={iconoServicio} className="colegioLibro" />
                                            <p class="card-text">Préstamo de calculadoras científicas y normales</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title">Préstamo de Revistas</h4><img src={iconoServicio} className="colegioLibro" />
                                            <p class="card-text">Préstamo de revistas informativas</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
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

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                    
                                        <div class="card-body">
                                            <h4 class="card-title">Computadoras</h4> <img src={iconoServicio2} className="colegioLibro" />
                                            <p class="card-text">Préstamo de computadoras</p>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title">Préstamo de Videos</h4> <img src={iconoServicio2} className="colegioLibro" />
                                            <p  class="card-text p-servicio">Préstamo de videos informativos</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title">Material Didáctico</h4> <img src={iconoServicio2} className="colegioLibro" />
                                            <p class="card-text">Préstamo de material Didáctico</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title">Computadoras</h4><img src={iconoServicio2} className="colegioLibro" />
                                            <p class="card-text">Préstamo de computadoras</p>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title">Juegos</h4><img src={iconoServicio2} className="colegioLibro" />
                                            <p class="card-text">Préstamo de juegos de mesa</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title">Calculadoras</h4><img src={iconoServicio2} className="colegioLibro" />
                                            <p class="card-text">Préstamo de revistas informativas</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
            <div className='btns'>
                <button className='btnServicio' id='agregarserv'><a href="/AgregarServicio">Agregar servicio</a></button>
                <button className='btnServicio' id='adminserv'><a href="/Administrar">Administrar Servicios</a> </button>
            </div>
        </div>



    )

}

export default Servicios