import React from 'react'
import '../styles/Home.css';
import img from '../assets/imgheader.png'
import Mision from '../assets/mision.png'
import Historia from '../assets/historia.png'
import Servicios from '../assets/servicios.png'
import email from '../assets/email.png'
import pin from '../assets/pin.png'
import ajedrez from '../assets/Ajedrez.jpg'
import semana from '../assets/libro.png'
import libreria from '../assets/biblioteca.jpg'



import { Link } from 'react-router-dom'
function Home() {
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
              <Link to='/Formulario' id='btnHome' className="btn1" > Regístrate </Link>
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
                <Link to='/' className="btn1" > Leer Más </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='divisor'></div>

      <div id="carouselExampleCaptions" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ajedrez} className="d-block w-100 imgcarrusel" alt="..." height="200px"  />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='h5carrusel'>Torneo de Ajedrez</h5>
              <p className='pcarrusel'>La próxima semana tendremos torneos de ajedrez.</p>
              <Link className='btn2' to="/Noticia"> Conoce Más </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src={semana} className="d-block w-100 imgcarrusel" alt="..." height="200px"  />
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

      {/* <div className='container'>
        <div className='row comentarios justify-content-center'>
          <div className='col-6'>
            <h1 className='h1comentarios'>Comentarios</h1>
            <form action='' className='form_comentarios d-flex justify-content-end flex-wrap'>
              <input type={"text"} name="" id='' placeholder='Comentario'></input>
              <button className='btn4' type='button'>Comentar</button>
            </form>

            <div className='media'>
              <img src={Mision} width="64" height="64" alt="" />
              <div className='media-body'>
                <p className='nombre'>Don Bosco <span>17:36 8/20/2022</span></p>
                <p className='comentario'>"Me basta que sean jóvenes para amarlos como a hijos" </p>
                <div className='botones text-right'>
                  <a href='#'>Borrar</a>
                </div>
              </div>
            </div>

            <div className='media'>
              <img src={Servicios} width="64" height="64" alt="" />
              <div className='media-body'>
                <p className='nombre'>Emilio <span>17:36 8/20/2022</span></p>
                <p className='comentario'>Faltan 69 días para Expotec</p>
                <div className='botones text-right'>
                  <a href='#'>Borrar</a>
                </div>
              </div>
            </div>
            <div className='media'>
              <img src={Historia} width="64" height="64" alt="" />
              <div className='media-body'>
                <p className='nombre'>Mario <span>17:36 8/20/2022</span></p>
                <p className='comentario'>Chicos, a trabajar en Factura Electrónica</p>
                <div className='botones text-right'>
                  <a href='#'>Borrar</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div> */}





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
