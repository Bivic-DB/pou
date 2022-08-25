import React, { useState } from 'react';
import '../styles/Registro.css';
import Axios from 'axios';
const SigninForm = () => {

    const [Emaillog, setEmaillog] = useState("");
    const [Passwordlog, setPasswordlog] = useState("");

    const [loginStatus, setloginStatus] = useState("");

    Axios.defaults.withCredentials = true;

    const IniciarSes = () => {
        Axios.post('http://localhost:3001/Login', {
            // Objeto con las propiedades que queremos enviar
            Email: Emaillog,
            Password: Passwordlog,

        }).then((response) => {
            if (response.data.message) {
                setloginStatus(response.data.message);
            }
            else {
                setloginStatus(response.data[0].CORREO);
            }
        })
    };

    return (
        <div className='Form'>


            <div class="form-container sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                    {/* Input Correo */}
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingEmailLogin" placeholder="Example@example.com" name="Email" onChange={
                            (event) => {
                                setEmaillog(event.target.value)
                            }} />
                        <label for="floatingName">Correo Electronico</label>
                    </div>
                    {/* Input Contraseña */}
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPassWordLogin" placeholder="Example@example.com" name="Email" onChange={
                            (event) => {
                                setPasswordlog(event.target.value)
                            }} />
                        <label for="floatingName">Contraseña</label>
                    </div>
                    <div>
                        <button onClick={IniciarSes} className='submit'>Iniciar</button>
                        <h1>{loginStatus}</h1>
                    </div>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button class="ghost" id="signIn">Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button class="ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SigninForm;