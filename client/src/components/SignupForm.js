import React, { useState } from 'react';
// axios ayuda a poder requerir la información a alguna API ya sea pública o privada
import Axios from 'axios';

function SignupForm() {

    const [NameReg, setNameReg] = useState("");
    const [LastNameReg, setLastNameReg] = useState("");
    const [SecLastNameReg, setSecLastNameReg] = useState("");
    const [EmailReg, setEmailReg] = useState("");
    const [PasswordReg, setPasswordReg] = useState("");
    const [RolReg, setRolReg] = useState("");
    const [registerStatus, setregisterStatus] = useState("");

    const agregarRegistro = () =>{
        Axios.post('https://bivic-db-deploy.herokuapp.com/Registro', {
            // Objeto con las propiedades que queremos enviar
            Name: NameReg,
            LastName : LastNameReg,
            SecLastName : SecLastNameReg,
            Email : EmailReg,
            Password : PasswordReg,
            Rol : "2",
        }).then( () => {
            setregisterStatus("Usuario Registrado");
        })
    };

    return (
        <div className='Form'>
            <h1>Crear cuenta</h1>

            {/* Input Nombre */}
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingName" placeholder="Juan" name="Nombre" onChange={
                    (event) => { 
                        setNameReg(event.target.value)
                }}
                />
                <label for="floatingName">Nombre</label>
                
            </div>
            {/* Input Primer Apellido */}
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingLN1" placeholder="Paolo" name="PApellido"  onChange={
                    (event) => { 
                        setLastNameReg(event.target.value)
                }}
                />
                <label for="floatingLN1">Primer Apellido</label>
            </div>
            {/* Input Segundo Apellido */}
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingLN2" placeholder="Cordero" name="Apellidodos"  onChange={
                    (event) => { 
                        setSecLastNameReg(event.target.value)
                }}
                />
                <label for="floatingLN2">Segundo Apellido</label>
            </div>
            {/* Input Correo Electronico */}
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingemail" placeholder="name@example.com" name="Correo"  onChange={
                    (event) => { 
                        setEmailReg(event.target.value)
                }} 
                />
                <label for="floatingemail">Correo Electronico</label>
            </div>
            {/* Input Contraseña */}
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="123" name="Contrasena"  onChange={
                    (event) => { 
                        setPasswordReg(event.target.value)
                }}
                />
                <label for="floatingPassword">Contraseña</label>
            </div>
            {/* Input Rol */}
            {/*<div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingRol" placeholder="admin" name="Rol"  onChange={
                    (event) => { 
                        setRolReg(event.target.value)
                }} 
                />
                <label for="floatingPassword">Rol</label>
            </div>*/}
            <div>
                <button onClick={agregarRegistro} className='submit'>Registrar</button>
                <h4>{registerStatus}</h4>
            </div>
        </div>
    );
};

export default SignupForm;