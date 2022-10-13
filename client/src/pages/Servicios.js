import React, { useState, useEffect } from 'react'
import '../styles/Servicios.css';
import derecha from '../assets/chevron-right-solid.svg'
import izquierda from '../assets/chevron-left-solid.svg'
import iconoServicio from '../assets/Artboard 72.png'
import iconoServicio2 from '../assets/Artboard 71.png'
import $ from 'jquery';
import Axios from 'axios';
import Swal from 'sweetalert2';



function Servicios() {
    let countColegio = 1;
    let countEscuela = 1;
    const [Servicios, setServicios] = useState([]);
    let autoincrement = 0;
    let autoincrement2 = 0;


    useEffect(() => {
        Axios.get('https://bivic-db-deploy.herokuapp.com/Enlistado').then((response) => {
            setServicios(response.data);
        });
    }, []);

      function change(){

        var carouselWidth = $(".carousel-inner")[0].scrollWidth;
        var cardWidth = $(".carousel-item").width();
        var scrollPosition = 0; 

        $(".carousel-control-next").on("click", function () {
            if (scrollPosition < (carouselWidth - cardWidth * 4)) { //check if you can go any further
              scrollPosition += cardWidth;  //update scroll position
              $(".carousel-inner").animate({ scrollLeft: scrollPosition },200); //scroll left
            }
          });      
    
          $(".carousel-control-prev").on("click", function () {
            if (scrollPosition > 0) {
              scrollPosition -= cardWidth;
              $(".carousel-inner").animate(
                { scrollLeft: scrollPosition },
                200
              );
            }
          });

      }

      function change2(){

        var carouselWidth2 = $(".carousel-inner")[0].scrollWidth;
        var cardWidth2 = $(".carousel-item").width();
        var scrollPosition2 = 0; 

        $(".carousel-control-next").on("click", function () {
            if (scrollPosition2 < (carouselWidth2 - cardWidth2 * 4)) { //check if you can go any further
                scrollPosition2 += cardWidth2;  //update scroll position
              $(".carousel-inner").animate({ scrollLeft: scrollPosition2 },200); //scroll left
            }
          });      
    
          $(".carousel-control-prev").on("click", function () {
            if (scrollPosition2 > 0) {
                scrollPosition2 -= cardWidth2;
              $(".carousel-inner").animate(
                { scrollLeft: scrollPosition2 },
                200
              );
            }
          });

      }

    return (

        <div className='container-servicios'>
            <h1> Servicios </h1>
            <section className="pt-5 pb-5 section-servicios">
                <div className="container-s">
                    <h3>Biblioteca del Colegio</h3>
                    <div id="carouselExampleControls" className="carousel carousel-dark" data-bs-ride="carousel">
                        <div className="carousel-inner">

                            {Servicios.map((val, key) => {
                                if (val.lugarU == 1) {
                                    if (autoincrement == 0) {
                                        return (
                                            <div className="carousel-item active">
                                                <div key={autoincrement++} className="card-s">

                                                    <div className="card-body">
                                                        <h4 className="card-title ">{countColegio++}</h4> <img src={iconoServicio} className="colegioLibro" />
                                                        <p className="card-text">{val.informacion}</p>
                                                        <h6 className="card-subtitle mb-2 text-muted">Únicamente accesible en persona</h6>

                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    }
                                    else {
                                        return (
                                            <div className="carousel-item">
                                                <div key={autoincrement++} className="card-s">

                                                    <div className="card-body">
                                                        <h4 className="card-title ">{countColegio++}</h4> <img src={iconoServicio} className="colegioLibro" />
                                                        <p className="card-text">{val.informacion}</p>
                                                        <h6 className="card-subtitle mb-2 text-muted">Únicamente accesible en persona</h6>

                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    }
                                }

                            })}

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" onClick={change()}>
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" onClick={change()}>
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>

            
            
            <section className="pt-5 pb-5 section-servicios">
                <div className="container-se">
                    <h3>Biblioteca de la Escuela</h3>
                    <div id="carouselExampleControls2" className="carousel carousel-dark" data-bs-ride="carousel">
                        <div className="carousel-inner carousel-inner-2">

                            {Servicios.map((val, key) => {
                                if (val.lugarU == 2) {
                                    if (autoincrement2 == 0) {
                                        return (
                                            <div className="carousel-item active">
                                                <div key={autoincrement2++} className="card-s">

                                                    <div className="card-body">
                                                        <h4 className="card-title ">{countEscuela++}</h4> <img src={iconoServicio2} className="colegioLibro" />
                                                        <p className="card-text">{val.informacion}</p>
                                                        <h6 className="card-subtitle mb-2 text-muted">Únicamente accesible en persona</h6>

                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    }
                                    else {
                                        return (
                                            <div className="carousel-item">
                                                <div key={autoincrement++} className="card-s">

                                                    <div className="card-body">
                                                        <h4 className="card-title ">{countEscuela++}</h4> <img src={iconoServicio2} className="colegioLibro" />
                                                        <p className="card-text">{val.informacion}</p>
                                                        <h6 className="card-subtitle mb-2 text-muted">Únicamente accesible en persona</h6>

                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    }
                                }

                            })}

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev" onClick={change2()}>
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next" onClick={change2()}>
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
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