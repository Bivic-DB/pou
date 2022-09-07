import React, { useState } from 'react';
import '../styles/Registro.css';
import Axios from 'axios';
const SigninForm = () => {

    const [Emaillog, setEmaillog] = useState("");
    const [Passwordlog, setPasswordlog] = useState("");
    
    const [loginStatus, setloginStatus] = useState("");

    const IniciarSes = () =>{
        Axios.post('http://localhost:3001/Login', {
            // Objeto con las propiedades que queremos enviar
            Email: Emaillog,
            Password : Passwordlog,
            
        }).then((response) => {
            if (response.data.message){
                setloginStatus(response.data.message);
            }
            else {
                setloginStatus("Usuario: " + response.data[0].NOMBRE);
            }
        })
    };

    return (
        <div className='Form'>
            <h1>Iniciar Sesión</h1>

            {/* Input Correo */}
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingEmailLogin" placeholder="Example@example.com" name="Email" onChange={
                    (event) => { 
                        setEmaillog(event.target.value)
                }}/>
                <label for="floatingName">Correo Electronico</label>
            </div>
            {/* Input Contraseña */}
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassWordLogin" placeholder="Example@example.com" name="Email" onChange={
                    (event) => { 
                        setPasswordlog(event.target.value)
                }}/>
                <label for="floatingName">Contraseña</label>
            </div>
            <div>
                <button onClick={IniciarSes} className='submit'>Iniciar</button>
                <h3>{loginStatus}</h3>
            </div>

            
        </div>
    )
}

export default SigninForm;