import React from 'react'
import '../styles/Servicios.css';

function Servicios() {
    return (

        <div>
            <div className='serv'>
                <section id="pasos">
                    <div class="contenedora">
                        <div class="contenidos">
                            <h2 className='h2Servicios'>Servicios  </h2>
                            <table id="pasosarealizar">
                                <tr>
                                    <th> Biblioteca del colegio</th>
                                    <th> Biblioteca de la escuela</th>
                                </tr>
                                <tr><td class="servcolegio"> Préstamo de libros en sala y a domicilio.</td> <td class="servescuela">Préstamo de computadoras.</td></tr>
                                <tr><td class="servcolegio"> Préstamo de vídeos.</td><td class="servescuela">Préstamo de vídeos.</td></tr>
                                <tr><td class="servcolegio"> Préstamo de material didáctico.</td><td class="servescuela"> Préstamo de material didáctico.</td></tr>
                                <tr><td class="servcolegio"> Préstamo de computadoras.</td><td class="servescuela"> Préstamo de computadoras.</td></tr>
                                <tr><td class="servcolegio"> Préstamo de calculadoras.</td></tr>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
            <div class='cont_imp'>
                <div class='imp1'>
                    <h3 className='h3Servicios'>¡Importante!</h3>
                    <p> Para hacer uso de los materiales y todos los servicios que se enlistan arriba, debes asistir a las bibliotecas de manera presencial.</p>
                </div>
                <div class='imp2'>
                    <p>Recuerda que para hacer uso de la mayor parte de estos es importante llevar el carnet.</p>
                </div>
            </div>

            <div class='btns'>
                <button className='btnServicio' id='agregarserv'><a href="/AgregarServicio">Agregar servicio</a></button>
                <button className='btnServicio' id='adminserv'><a href="/Administrar">Administrar Servicios</a> </button>
            </div>
        </div>



    )

}

export default Servicios