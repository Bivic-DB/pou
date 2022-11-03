import React, { Fragment, useState, useEffect } from 'react'
import '../styles/Home.css';
import img from '../assets/imgheader.png'
import Mision from '../assets/mision.png'
import Historia from '../assets/historia.png'
import Servicios from '../assets/servicios.png'
import email from '../assets/email.png'
import pin from '../assets/pin.png'
import ajedrez from '../assets/Ajedrez.png'
import semana from '../assets/libro.png'
import libreria from '../assets/biblioteca.jpg'

import Axios from 'axios';
import Swal from 'sweetalert2';

import { Link } from 'react-router-dom'
function Home() {

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get('http://localhost:3001/Login').then((response) => {
      console.log(response);
    })
  }, []);

  return (
    <div className='Home'>

      <div className='Header-home'>
        <div className='container-header'>
          <div className="row-header">
            <div className="col-2-header">
              <img src={img} className="imgHome" />
            </div>
            <div className="col-2-header">
              <h2 className='h2Home'>Biblioteca Virtual Cedes Don Bosco</h2>
              <div className='Homebar'></div>
              <p className='pHome'>Forma parte de generaciones conjuntas de conocimiento</p>
              <Link to='/Registro' id='btnHome' className="btn1" > Regístrate </Link>
            </div>

          </div>
        </div>
      </div>
      <div className='divisor'></div>

      <div className="contenedor-metas-grande" id="metas">
        <div className="metas">
          <div className="contenedor-metas">
            <div className="metas-row">
              <div className="columna-metas" id="metasizquierda">
                <img src={Mision} className="ImgInformacion" />

                <h3>Misión, Visión y Valores</h3>
                <p> Conoce un poco del proyecto</p>
                <Link to='/Misionvalor' className="btn1" > Leer Más </Link>
              </div>
              <div className="columna-metas">
                <img src={Servicios} className="ImgInformacion" />

                <h3>Servicios</h3>
                <p> Revisa el contenido que ofrecemos en las bibliotecas </p>
                <Link to='/Servicios' className="btn1" > Leer Más </Link>
              </div>
              <div className="columna-metas" id="metasderecha">
                <img src={Historia} className="ImgInformacion" />
                <h3>Historia</h3>
                <p> Echa un vistazo el como empezamos </p>
                <Link to='/Historia' className="btn1" > Leer Más </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='divisor'></div>

      {/* carousel de noticias */}
      <div id="carouselExampleCaptions" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
        </div>
        <div className="carousel-inner">          
        <div className="carousel-item active">
            <img src={ajedrez} className="d-block w-100 imgcarrusel" alt="..." height="400px" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='h5carrusel'>¿Sabias Qué?</h5>
              <p className='pcarrusel'>¡Esta próxima semana celebramos Expotec!</p>
              <a className='btn2' href="https://cedesdonbosco.ed.cr/es/index.php"> Ver más </a>
            </div>
          </div>

          <div className="carousel-item">
            <img src={semana} className="d-block w-100 imgcarrusel" alt="..." height="200px" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='h5carrusel'>Semana del Libro</h5>
              <p className='pcarrusel'>Celebra con nosotros la semana del libro.</p>
              <Link className='btn2' to="/Noticia"> Conoce Más </Link>

            </div>
          </div>
          <div className="carousel-item">
            <img src={libreria} className="d-block w-100 imgcarrusel" alt="..." height="200px" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='h5carrusel'>Visítanos</h5>
              <p className='pcarrusel'>Visitanos para empaparte de información.</p>
              <Link className='btn2' to="/Noticia"> Conoce Más </Link>

            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden"></span>
        </button>
      </div>
      <div className='divisor'></div>

      <div className='divisor'></div>

      <div id='Contacto' className='contact'>
        <div className='content'>
          <h2>Contáctanos</h2>
        </div>
        <div className='containerContact'>
          <div className='contactInfo'>
            <div className='box'>
              <div className='icon'>
                <img className='iconContact' src={pin}></img>
              </div>
              <div className='text'>
                <h3>Dirección</h3>
                <p>Colegio Técnico Don Bosco: Edificio A <br></br> <br></br> Escuela Juan Bosco: Segundo Piso del edificio Principal </p>
              </div>
            </div>
            <div className='box'>
              <div className='icon'>
                <img className='iconContact' src={email}></img>
              </div>
              <div className='text'>
                <h3>Email</h3>
                <p className='nameEmail'>bibliotecas@cedesdonbosco.ed.cr</p>
              </div>
            </div>
          </div>
          <div className='contactForm'>
            <form>
              <h2>Envía tu mensaje</h2>
              <div className='inputBox'>
                <input type={"text"} name="" required="required"></input>
                <span>Nombre Completo</span>
              </div>
              <div className='inputBox'>
                <input type={"text"} name="" required="required"></input>
                <span>E-mail</span>
              </div>
              <div className='inputBox'>
                <textarea required="required"></textarea>
                <span>Mensaje</span>
              </div>
              <div className='inputBox'>
                <input type={"submit"} name="" value={"Enviar"}></input>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
