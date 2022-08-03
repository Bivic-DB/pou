import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='Navbar'>
      <div className='leftSide'>
        <img src={Logo} />
      </div>
      <div className='rightSide'>
        <Link to="/"> Inicio </Link>

      </div>
    </div>
  )
}

export default Navbar
