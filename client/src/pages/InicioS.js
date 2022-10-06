import React, { useState, useEffect } from 'react';
import '../styles/Inicio.css';
import Axios from 'axios';
import img1 from '../assets/6736811.png';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const SigninForm = () => {

    const [Emaillog, setEmaillog] = useState("");
    const [Passwordlog, setPasswordlog] = useState("");
    const [loginStatus, setloginStatus] = useState("");

    Axios.defaults.withCredentials = true;
    const navigate = useNavigate();

    const IniciarSes = () => {
        Axios.post('https://bivic-db-deploy.herokuapp.com/Login', {
            // Objeto con las propiedades que queremos enviar
            Email: Emaillog,
            Password: Passwordlog,

        }).then((response) => {
            console.log(response);
            if (response.data.message) {
                setloginStatus(response.data.message);
            }
            else {
                setloginStatus("Usuario: " + response.data[0].nombre);
                Swal.fire({
                    icon: 'success',
                    title: 'Se ha ingresado correctamente',
                    showConfirmButton: false,
                    timer: 1500,
                }).then(function() {
                    
                    window.location.reload();
                    navigate('/');
                });
            }
        })
    };

    useEffect(()=> {
        Axios.get('https://bivic-db-deploy.herokuapp.com/Login').then((response) => {
            if (response.data.loggedIn == true){
            }
        })
    }, []);

    return (
        <div className='Contenedor-Inicio'>
            <div className='Cont2'>
            <div className='FormS'>
                <h1 id="HeaderTitle" >Iniciar Sesión</h1>

                <div className='Org'>
                    {/* Input Correo */}
                    <div className="form-floating mb-3-inicio">
                        <input type="text" className="form-control" id="floatingEmailLogin" placeholder="Example@example.com" name="Email" onChange={
                            (event) => {
                                setEmaillog(event.target.value)
                            }} />
                        <label htmlFor="floatingName"> Correo Electronico</label>
                    </div>
                    <br></br>
                    {/* Input Contraseña */}
                    <div className="form-floating mb-3-inicio">
                        <input type="password" className="form-control" id="floatingPassWordLogin" placeholder="Example@example.com" name="Email" onChange={
                            (event) => {
                                setPasswordlog(event.target.value)
                            }} />
                        <label htmlFor="floatingName">Contraseña</label>
                    </div>
                   <br></br>
                    <div>
                    <Link to='/Registro' className="registrolink"><p id='reg1'>¿No tienes una cuenta?</p><p id='reg2'> Regístrate</p></Link>
                    </div>
                
                    <div>
                        <p>{loginStatus}</p>
                        <button onClick={IniciarSes} className='submit'>Iniciar</button>
                        
                    </div>
                </div>
                
            </div>
            <div className='contimg'> 
             <img  src={img1}  className='img1'></img>
            </div>
            </div>

            
        </div>
    )
}

export default SigninForm;