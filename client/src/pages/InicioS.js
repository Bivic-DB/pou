import React, { useState, useEffect } from 'react';
import '../styles/Inicio.css';
import Axios from 'axios';
<<<<<<< Updated upstream
import img1 from '../assets/6736811.png';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
=======

>>>>>>> Stashed changes

const SigninForm = () => {

    const [Emaillog, setEmaillog] = useState("");
    const [Passwordlog, setPasswordlog] = useState("");

    const [loginStatus, setloginStatus] = useState("");

    Axios.defaults.withCredentials = true;
<<<<<<< Updated upstream
    const navigate = useNavigate();
=======
>>>>>>> Stashed changes

    const IniciarSes = () => {
        Axios.post('https://bivic-db-deploy.herokuapp.com/Login', {
            // Objeto con las propiedades que queremos enviar
            Email: Emaillog,
            Password: Passwordlog,

        }).then((response) => {
            if (response.data.message) {
            }
            else {
<<<<<<< Updated upstream
                Swal.fire({
                    icon: 'success',
                    title: 'Se ha ingresado correctamente',
                    showConfirmButton: false,
                    timer: 1500,
                }).then(function() {
                    
                    window.location.reload();
                    navigate('/');
                });
=======
                setloginStatus("Usuario: " + response.data[0].NOMBRE);
>>>>>>> Stashed changes
            }
        })
    };

    useEffect(()=> {
        Axios.get('https://bivic-db-deploy.herokuapp.com/Login').then((response) => {
<<<<<<< Updated upstream
            if (response.data.loggedIn == true){
            }
=======
            setloginStatus(response.data.user[0].Email);
>>>>>>> Stashed changes
        })
    }, []);

    return (
        <div className='Contenedor-Inicio'>
<<<<<<< Updated upstream
            <div className='Cont2'>
=======
            <div className='todo'>
>>>>>>> Stashed changes
            <div className='FormS'>
                <h1 id="HeaderTitle" >Iniciar Sesión</h1>

                <div className='Org'>
                    {/* Input Correo */}
                    <div className="formSs">
                        <input type="text" className="form-control"  id="floatingEmailLogin" placeholder="Correo Electrónico" name="Email" onChange={
                            (event) => {
                                setEmaillog(event.target.value)
                            }} />
<<<<<<< Updated upstream
              
=======
                        <label htmlFor="floatingName">Correo Electronico</label>
>>>>>>> Stashed changes
                    </div>
                    <br></br>
                    {/* Input Contraseña */}
                    <div className="formSs">
                        <input type="password" className="form-control" id="floatingPassWordLogin" placeholder="Contraseña" name="Email" onChange={
                            (event) => {
                                setPasswordlog(event.target.value)
                            }} />
                      
                    </div>
<<<<<<< Updated upstream
                   <br></br>
                    <div>
                    <Link to='/Registro' className="registrolink"><p id='reg1'>¿No tienes una cuenta?</p><p id='reg2'> Regístrate</p></Link>
                    </div>
                
                    <div>
                        <p>{loginStatus}</p>
                        <button onClick={IniciarSes} className='submit' id='submit2'>Iniciar</button>
                        
=======
                    <div>
                        <button onClick={IniciarSes} className='submit'>Iniciar</button>
                        <h3>{loginStatus}</h3>
>>>>>>> Stashed changes
                    </div>
                </div>
            </div>
<<<<<<< Updated upstream
            <div className='contimg'> 
             <img  src={img1}  className='img1'></img>
            </div>
            </div>

            
=======

            <div className='fotocaja'>
                  
            </div>
            </div>
>>>>>>> Stashed changes
        </div>
    )
}

export default SigninForm;