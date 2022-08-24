import React, { useState } from 'react';
import '../styles/Registro.css';
import Axios from 'axios';
const SigninForm = () => {

    const [Emaillog, setEmaillog] = useState("");
    const [Passwordlog, setPasswordlog] = useState("");
    
    const IniciarSes = () =>{
        Axios.post('http://localhost:3001/Login', {
            // Objeto con las propiedades que queremos enviar
            Email: Emaillog,
            Password : Passwordlog,
            
        }).then( () => {
            console.log("success");
        })
    };

    return (
        <div className='Form'>
            {/* Input Correo */}
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingEmail" placeholder="Example@example.com" name="Email" onChange={
                    (event) => { 
                        setEmaillog(event.target.value)
                }}/>
                <label for="floatingName">Correo Electronico</label>
            </div>
            {/* Input Contraseña */}
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingEmail" placeholder="Example@example.com" name="Email" onChange={
                    (event) => { 
                        setPasswordlog(event.target.value)
                }}/>
                <label for="floatingName">Contraseña</label>
            </div>
            <div>
                <button onClick={IniciarSes} className='submit'>Iniciar</button>
            </div>
        </div>
    )
}

export default SigninForm;