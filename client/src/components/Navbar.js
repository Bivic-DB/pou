import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../styles/Navbar.css';
import Menu from '../assets/menu.png'
import Logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate();
  const [User, setUser] = useState([]);
  const [Logged, setLogged] = useState(null);
  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get('http://localhost:3001/Login').then((response) => {
      if (response.data.loggedIn == true) {
        setUser(response.data.user[0]);
        setLogged(response.data.loggedIn);
      }
      else (
        setLogged(response.data.loggedIn)
      )
    })
  }, [Logged]);

  const onchange = () => {
    console.log("Llegando")
    Axios.delete(`http://localhost:3001/Logout`).then((response) => {
      window.location.reload();
    })
  }

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
            {Logged == false && <>
              <li><Link className='btnNavbar' to='/Inicio'> Iniciar Sesión </Link></li>
              <li><Link className='btnNavbar' to='/Registro'> Registrarse </Link></li>

            </>}
            {Logged == true && User.rol == 1 && <>
              <li ><Link className='btnNavbar' to='/Comentarios'> Comentarios </Link></li>
              <li ><Link className='btnNavbar' to='/Administrar'> Administrar </Link></li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {User.nombre}
                </a>
                <ul class="dropdown-menu">
                  <li><button class="dropdown-item" href="#" onClick={() => { onchange() }}>Cerrar Sesión</button></li>
                </ul>
              </li>
              <li className='btnNavbar' id='LogOut' ><button onClick={() => { onchange() }}>Cerrar Sesión</button></li>
            </>}
            {Logged == true && User.rol == 2 && <>
              <li ><Link className='btnNavbar' to='/Comentarios'> Comentarios </Link></li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {User.nombre}
                </a>
                <ul class="dropdown-menu">
                  <li><button class="dropdown-item" href="#" onClick={() => { onchange() }}>Cerrar Sesión</button></li>
                </ul>
              </li>
              <li className='btnNavbar' id='LogOut' ><button onClick={() => { onchange() }}>Cerrar Sesión</button></li>
            </>}
            {Logged == true && User.rol == 3 && <>
              <li ><Link className='btnNavbar' to='/Comentarios'> Comentarios </Link></li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {User.nombre}
                </a>
                <ul class="dropdown-menu">
                  <li><button class="dropdown-item" href="#" onClick={() => { onchange() }}>Cerrar Sesión</button></li>
                </ul>
              </li>
              <li className='btnNavbar' id='LogOut' ><button onClick={() => { onchange() }}>Cerrar Sesión</button></li>
            </>}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
