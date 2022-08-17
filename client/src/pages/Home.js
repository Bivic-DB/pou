import React from 'react'
import '../styles/Home.css';
import img from '../assets/Home.svg'
import Mision from '../assets/Mision.svg'
import Historia from '../assets/Historia.svg'
import Servicios from '../assets/Servicios.svg'

import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='Header'>
       <div className='container'>
        <div className="row">
          <div className="col-2">
          <h2>Biblioteca Virtual Cedes Don Bosco</h2>
          <div style={{ borderTop: "3px solid #000000 ", marginLeft: 0, marginRight: -15 , marginTop: -26 }}></div>
          <p>Eslogan y texto por decidir</p>
          <Link to='/registrarse' className="btn" > Regístrate </Link>
          </div>
          <div className="col-2">
          <img src={img} className="imgHome"/>
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


     </div>
  )
}

export default Home
