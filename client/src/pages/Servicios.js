import React from 'react'
import '../styles/Servicios.css';

function Servicios() {
    return (

        <div>
            <div className='serv'>
                <section id="pasos">
                    <div className="contenedora">
                        <div className="contenidos">
                            <h2 className='h2Servicios'>Servicios  </h2>
                            <table id="pasosarealizar" className='tableservicios'>
                                <tr>
                                    <th className='thservicios'> Biblioteca del colegio</th>
                                    <th className='thservicios'> Biblioteca de la escuela</th>
                                </tr>
                                <tr><td className="servcolegio"> Préstamo de libros en sala y a domicilio.</td> <td className="servescuela">Préstamo de computadoras.</td></tr>
                                <tr><td className="servcolegio"> Préstamo de vídeos.</td><td className="servescuela">Préstamo de vídeos.</td></tr>
                                <tr><td className="servcolegio"> Préstamo de material didáctico.</td><td className="servescuela"> Préstamo de material didáctico.</td></tr>
                                <tr><td className="servcolegio"> Préstamo de computadoras.</td><td className="servescuela"> Préstamo de computadoras.</td></tr>
                                <tr><td className="servcolegio"> Préstamo de calculadoras.</td></tr>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
            <div className='cont_imp'>
                <div className='imp1'>
                    <h3 className='h3Servicios'>¡Importante!</h3>
                    <p> Para hacer uso de los materiales y todos los servicios que se enlistan arriba, debes asistir a las bibliotecas de manera presencial.</p>
                </div>
                <div className='imp2'>
                    <p>Recuerda que para hacer uso de la mayor parte de estos es importante llevar el carnet.</p>
                </div>
            </div>

            <div className='btns'>
                <button className='btnServicio' id='agregarserv'><a href="/AgregarServicio">Agregar servicio</a></button>
                <button className='btnServicio' id='adminserv'><a href="/Administrar">Administrar Servicios</a> </button>
            </div>
        </div>



    )

}

export default Servicios