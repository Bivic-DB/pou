import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='Navbar'>
      <div className='leftSide'>
        <img src={Logo} />
      </div>
      <div className='middle'>
        <Link to="/"> Inicio </Link>
        <Link to="/servicio"> Servicios </Link>
        <Link to="/contacto"> Contacto </Link>
      </div>
      
      <div className='rightSide'>
        <Link to='/inicio-sesion'> Iniciar Sesión </Link>
        <Link to='/registrarse'> Regístrate </Link>
      </div>
    </div>
  )
}

export default Navbar
