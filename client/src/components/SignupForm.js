import React, { useState } from 'react';
import Axios from 'axios'

function SignupForm() {

    const [NameReg, setNameReg] = useState("");
    const [LastNameReg, setLastNameReg] = useState("");
    const [SecLastNameReg, setSecLastNameReg] = useState("");
    const [EmailReg, setEmailReg] = useState("");
    const [PasswordReg, setPasswordReg] = useState("");
    const [RolReg, setRolReg] = useState("");

    const Registro = () => {
        Axios.post('http://localhost:3001/Formulario', {
            Name: NameReg,
            LastName: LastNameReg,
            SecLastName: SecLastNameReg,
            Email: EmailReg,
            Password: PasswordReg,
            Rol: RolReg
        }).then((response) => {
            console.log(response);
        }).catch(error => {
            console.log(error.response)
        })
    };

    return (
        <div className='Form'>
            <h1>Crear cuenta</h1>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingName" placeholder="Juan" name="Nombre" onChange={(e) => {
                    setNameReg(e.target.value);
                }}
                />
                <label for="floatingName">Nombre</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingLN1" placeholder="Paolo" name="PApellido" onChange={(e) => {
                    setLastNameReg(e.target.value);
                }}
                />
                <label for="floatingLN1">Primer Apellido</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingLN2" placeholder="Cordero" name="2Apellido" onChange={(e) => {
                    setSecLastNameReg(e.target.value);
                }}
                />
                <label for="floatingLN2">Segundo Apellido</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingemail" placeholder="name@example.com" name="Correo" onChange={(e) => {
                    setEmailReg(e.target.value);
                }} />
                <label for="floatingemail">Correo Electronico</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="123" name="Contrasena" onChange={(e) => {
                    setPasswordReg(e.target.value);
                }} />
                <label for="floatingPassword">Contraseña</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingRol" placeholder="admin" name="Rol" onChange={(e) => {
                    setRolReg(e.target.value);
                }} />
                <label for="floatingPassword">Rol</label>
            </div>
            <div>
                <button onClick={Registro} className='submit'>Registrar</button>
            </div>
        </div>
    );
};

export default SignupForm;