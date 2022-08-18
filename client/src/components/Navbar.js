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
        <img to="/" src={Logo} id='logo1'/>
          <input type={"checkbox"} id="menuBtn"></input>
          <label for="menuBtn" className='barIcon'>
          <img className='menuIcon' src={Menu}></img>
        </label>
        <ul className='ulNav'>
        <li><Link className='btnNavbar' to="/"> Inicio </Link></li>  
          <li><Link className='btnNavbar' to="/Servicios"> Servicios </Link></li>
          <li><Link className='btnNavbar' to="/contacto"> Contacto </Link></li>
          <li><Link className='btnNavbar' to='/inicio-sesion'> Iniciar Sesión </Link></li> 
       <li><Link className='btnNavbar' to='/Registro'> Regístrate </Link></li> 
        </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
