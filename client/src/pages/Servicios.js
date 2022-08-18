import React from 'react'
import '../styles/Servicios.css';

function Servicios(){
 return (

     <div class="serv">
     <h2>Los servicios que brindamos:</h2>
     
     <table>
        <tr>
            <th> Biblioteca del colegio</th>
            <th> Biblioteca de la escuela</th>
        </tr>
        <tr><td class="servcolegio"> Préstamo de libros en sala y a domicilio.</td> <td class="servescuela">Préstamo de computadoras.</td></tr>
        <tr><td class="servcolegio"> Préstamo de material didáctico.</td><td class="servescuela"> Préstamo de material didáctico.</td></tr>
        <tr><td class="servcolegio"> Préstamo de computadoras.</td><td class="servescuela"> Préstamo de libros en sala y a domicilio.</td></tr>
        <tr><td class="servcolegio"> Préstamo de libros en sala y a domicilio.</td><td class="servescuela"> Préstamo de libros en sala y a domicilio.</td></tr>
        <tr><td class="servcolegio"> Préstamo de calculadoras.</td></tr> 
       </table>

       <div class='Importante'>


       </div>
       </div>
    
 

 )  
    
}

export default Servicios