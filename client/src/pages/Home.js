import React from 'react'
import '../styles/Home.css';
import img from '../assets/Home.svg'
import Mision from '../assets/Mision.svg'
import Historia from '../assets/Historia.svg'
import Servicios from '../assets/Servicios.svg'
import email from '../assets/email.png'
import pin from '../assets/pin.png'

import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='Header'>
       <div className='container'>
        <div className="row">
          <div className="col-2">
          <img src={img} className="imgHome"/>
            </div>
          <div className="col-2">
          <h2 className='h2Home'>Biblioteca Virtual Cedes Don Bosco</h2>
          <div className='Homebar'></div>
          <p>Eslogan y texto por decidir</p>
          <Link to='/registrarse' id='btnHome' className="btn" > Regístrate </Link>
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
     <div className='Slider'>
     </div>

     <div className='contact'>
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
