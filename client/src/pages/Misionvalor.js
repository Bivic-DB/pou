import React from "react";
import '../styles/Misionvalor.css';
import imguno from '../assets/6736811.png';

function Misionvalor(){
   return(
  <div id="contM">

       <div className="contS">
        <div className="text">
           <h2 className="text1">Misión</h2>
           <p className="text2">Somos una Comunidad Educativo-Pastoral comprometida con una educación integral, incluyente e innovadora, de niños y jóvenes, preferentemente de los que tienen menos oportunidades. Lo hacemos desde el carisma educativo de San Juan Bosco, mediante la formación para el trabajo, con el fin de que en la Iglesia y en la sociedad sean agentes de cambio como honrados ciudadanos y buenos cristianos. </p>
           </div>
           <img  src={imguno}  className='imguno'></img>
       </div>

       <div className="contS">
       <img  src={imguno}  className='imguno'></img>
       <div className="text">
           <h2 className="text1">Visión</h2>
           <p className="text2">Somos una Comunidad Educativo-Pastoral comprometida con una educación integral, incluyente e innovadora, de niños y jóvenes, preferentemente de los que tienen menos oportunidades. Lo hacemos desde el carisma educativo de San Juan Bosco, mediante la formación para el trabajo, con el fin de que en la Iglesia y en la sociedad sean agentes de cambio como honrados ciudadanos y buenos cristianos. </p>
           </div>

       </div>

       <div className="contS">
       <div className="text">
           <h2 className="text1">Valores</h2>
           <ul>
            <li>Creatividad</li>
            <li>Comunicación</li>
            <li>Responsabilidad</li>
           </ul>
            </div>
           <img  src={imguno}  className='imguno'></img>
       </div>

  </div>
   )

}

export default Misionvalor;