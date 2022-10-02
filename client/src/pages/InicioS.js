import React, { useState, useEffect } from 'react';
import '../styles/Inicio.css';
import Axios from 'axios';
import img1 from '../assets/6736811.png';
const SigninForm = () => {

    const [Emaillog, setEmaillog] = useState("");
    const [Passwordlog, setPasswordlog] = useState("");

    const [loginStatus, setloginStatus] = useState("");

    Axios.defaults.withCredentials = true;

    const IniciarSes = () => {
        Axios.post('https://bivic-db-deploy.herokuapp.com/Login', {
            // Objeto con las propiedades que queremos enviar
            Email: Emaillog,
            Password: Passwordlog,

        }).then((response) => {
            if (response.data.message) {
                setloginStatus(response.data.message);
            }
            else {
                setloginStatus("Usuario: " + response.data[0].NOMBRE);
            }
        })
    };

    useEffect(()=> {
        Axios.get('https://bivic-db-deploy.herokuapp.com/Login').then((response) => {
            setloginStatus(response.data.user[0].Email);
        })
    }, []);

    return (
        <div className='Contenedor-Inicio'>
            <div className='Cont2'>
            <div className='FormS'>
                <h1 id="HeaderTitle" >Iniciar Sesión</h1>

                <div className='Org'>
                    {/* Input Correo */}
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingEmailLogin" placeholder="Example@example.com" name="Email" onChange={
                            (event) => {
                                setEmaillog(event.target.value)
                            }} />
                        <label htmlFor="floatingName">Correo Electronico</label>
                    </div>
                    {/* Input Contraseña */}
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassWordLogin" placeholder="Example@example.com" name="Email" onChange={
                            (event) => {
                                setPasswordlog(event.target.value)
                            }} />
                        <label htmlFor="floatingName">Contraseña</label>
                    </div>
                    <div>
                        <button onClick={IniciarSes} className='submit'>Iniciar</button>
                        <h3>{loginStatus}</h3>
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