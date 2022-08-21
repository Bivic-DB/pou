import React from 'react'
import '../styles/Footer.css';
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='Footer'>
      <ul className='list'>
        <li>
          <Link className='btnNavbar' to="/"> Inicio </Link>
        </li>
        <li>
          <Link className='btnNavbar' to="/Servicios"> Servicios </Link>
        </li>
        <li>
          <a href='/#Contacto'> Contacto</a>
        </li>
      </ul>
      <p className='copyright'>
        © 2022 Cedes Don Bosco
      </p>
    </div>
  )
}

export default Footer