import React from "react";
import '../styles/Misionvalor.css';
import imguno from '../assets/imgMVV1.png';
import imgdos from '../assets/imgMVV3.png';
import imgtres from '../assets/imgMVV2.png';

function Misionvalor(){
   return(
  <div id="contM">

       <div className="contS">
        <div className="textMM">
           <h2 className="text1">Misión</h2>
           <p className="text2">Proveer espacios virtuales accesibles para promocionar y brindar servicios de las bibliotecas</p>
           </div>
           <img  src={imguno}  className='imguno'></img>
       </div>

       <div className="contS">
       <img  src={imgtres}  className='imguno'></img>
       <div className="textMM">
           <h2 className="text1">Visión</h2>
           <p className="text2">Fomentar la interacción de la comunidad de CEDES Don Bosco hacia las bibliotecas dentro de la institución</p>
           </div>

       </div>

       <div className="contS">
       <div className="textMM textu">
           <h2 className="text1">Valores</h2>
          <div className="ulM">
           <ul>
            <li>Afabilidad</li>
            <li>Comodidad</li>
            <li>Conocimiento</li>
            </ul>
            <ul>
            <li>Eficacia</li>
            <li>Simpatía</li>
            <li>Originalidad</li>
           </ul>
          
            </div>
       </div>
       <img  src={imgdos}  className='imgdos'></img>
       </div>
  </div>
   )

}

export default Misionvalor;