import React from 'react'
import '../styles/Navbar.css';
import Menu from '../assets/menu.png'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div id='Navbar' className='Navbar'>
      <div className='containerNav'>
        <nav>
          <img to="/" src={Logo} id='logo1' />
          <input type={"checkbox"} id="menuBtn"></input>
          <label htmlFor="menuBtn" className='barIcon'>
            <img className='menuIcon' src={Menu}></img>
          </label>
          <ul className='ulNav'>
            <li><Link className='btnNavbar' to="/"> Inicio </Link></li>
            <li><Link className='btnNavbar' to="/Servicios"> Servicios </Link></li>
            <li><a href='/#Contacto'>Contacto</a></li>
            <li><Link className='btnNavbar' to='/Formulario'> Iniciar Sesión </Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
