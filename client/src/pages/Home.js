import React from 'react'
import '../styles/Home.css';
import img from '../assets/imgheader.png'
import Mision from '../assets/mision.png'
import Historia from '../assets/historia.png'
import Servicios from '../assets/servicios.png'
import email from '../assets/email.png'
import pin from '../assets/pin.png'


import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='Home'>

    <div className='Header-home'>
       <div className='container-header'>
        <div className="row-header">
          <div className="col-2-header">
          <img src={img} className="imgHome"/>
            </div>
          <div className="col-2-header">
          <h2 className='h2Home'>Biblioteca Virtual Cedes Don Bosco</h2>
          <div className='Homebar'></div>
          <p className='pHome'>Forma parte de generaciones conjuntas de conocimiento</p>
          <Link to='/registrarse' id='btnHome' className="btn" > Regístrate </Link>
          </div>
          
        </div>
       </div>
    </div>

    <div class="contenedor-metas-grande" id="metas">
      <div class="metas">
        <div class="contenedor-metas">
            <div class="metas-row">
                <div class="columna-metas" id="metasizquierda">
                <img src={Mision} className="ImgInformacion"/>

                    <h3>Misión, Visión y Valores</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil modi, 
                    voluptatum ab neque distinctio quia molestiae doloribus </p>
                    <Link to='/' className="btn" > Leer Más </Link>
            </div>
            <div class="columna-metas">
            <img src={Servicios} className="ImgInformacion"/>

                 <h3>Servicios</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil modi, 
                voluptatum ab neque distinctio quia molestiae doloribus </p>
                <Link to='/' className="btn" > Leer Más </Link>
        </div>
        <div class="columna-metas" id="metasderecha">
        <img src={Historia} className="ImgInformacion"/>
             <h3>Historia</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil modi, 
            voluptatum ab neque distinctio quia molestiae doloribus </p>
            <Link to='/' className="btn" > Leer Más </Link>
    </div>
              </div>
            </div>
        </div>
    </div>

    <div id="carouselExampleCaptions" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Mision} class="d-block w-100" alt="..." height="200px" className='imgcarrusel' />
      <div class="carousel-caption d-none d-md-block">
        <h5 className='h5carrusel'>First slide label</h5>
        <p className='pcarrusel'>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Historia} class="d-block w-100" alt="..." height="200px" className='imgcarrusel'/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className='h5carrusel'>Second slide label</h5>
        <p className='pcarrusel'>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Servicios} class="d-block w-100" alt="..." height="200px" className='imgcarrusel'/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className='h5carrusel'>Third slide label</h5>
        <p className='pcarrusel'>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden"></span>
  </button>
</div>



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
