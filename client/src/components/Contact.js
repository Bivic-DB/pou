import React from 'react'
import '../styles/Contact.css';
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='Contact'>
      <div className='contact'>
      <div className='content'>
        <h2>Contáctanos</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil modi, 
                voluptatum ab neque distinctio quia molestiae doloribus </p>
      </div>
      <div className='containerContact'>
          <div className='contactInfo'>
            <div className='box'>
              <div className='icon'></div>
              <div className='text'>
                <h3>Dirección</h3>
                <p>Colegio Técnico Don Bosco: Edificio A <br></br> <br></br> Escuela Juan Bosco: Segundo Piso </p>
              </div>
            </div>
            <div className='box'>
              <div className='icon'></div>
              <div className='text'>
                <h3>Email</h3>
                <p>bibliotecas@cedesdonbosco.ed.cr</p>
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

export default Contact
