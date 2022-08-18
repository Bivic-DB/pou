import React from 'react'
import '../styles/Navbar.css';
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='Navbar'>
      <div className='leftSide'>
        <img to="/" src={Logo} id='logo1'/>
      </div>
      <div className='middle'>
        <Link className='btnNavbar' to="/"> Inicio </Link>
        <Link className='btnNavbar' to="/Servicios"> Servicios </Link>
        <Link className='btnNavbar' to="/contacto"> Contacto </Link>
      </div>
      
      <div className='rightSide'>
        <Link className='btnNavbar' to='/inicio-sesion'> Iniciar Sesión </Link>
        <Link className='btnNavbar' to='/Registro'> Regístrate </Link>
      </div>
    </div>
  )
}

export default Navbar
