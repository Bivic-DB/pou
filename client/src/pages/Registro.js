import React, { useState, useEffect } from 'react';
// axios ayuda a poder requerir la información a alguna API ya sea pública o privada
import Axios from 'axios';
import '../styles/Registro.css';
import {useFormik} from "formik";

function SignupForm() {

    const [NameReg, setNameReg] = useState("");
    const [LastNameReg, setLastNameReg] = useState("");
    const [SecLastNameReg, setSecLastNameReg] = useState("");
    const [EmailReg, setEmailReg] = useState("");
    const [PasswordReg, setPasswordReg] = useState("");
    const [RolReg, setRolReg] = useState("");
    const [registerStatus, setregisterStatus] = useState("");

    const formik = useFormik({
        initialValues: {
            Name: "",
            LastName: "",
            SecLastName: "",
            Email: "",
            Password: "",

        },
    });
    const agregarRegistro = () =>{
        if (/@est.cedesdonbosco.ed.cr\s*$/.test(EmailReg) || /@cedesdonbosco.ed.cr\s*$/.test(EmailReg)) {
            setRolReg("2");
         } 
         else { 
            setRolReg("3"); 
        }
        Axios.post('https://bivic-db-deploy.herokuapp.com/Registro', {
            // Objeto con las propiedades que queremos enviar
            Name: NameReg,
            LastName : LastNameReg,
            SecLastName : SecLastNameReg,
            Email : EmailReg,
            Password : PasswordReg,
            Rol : RolReg,
            Status : "Activo",
        }).then( () => {
            setregisterStatus("Usuario Registrado");
        })
    };

    return (
        <div className='Contenedor-Registro'>
            <div className='FormR'>
            <h1 id='HeaderTitleR'>Crear cuenta</h1>

            <div className='OrgR'>
            {/* Input Nombre */}
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingName" placeholder="Juan" name="Name" value={formik.value.Name} onChange={formik.handleChange}
                />
                <label htmlFor="floatingName">Nombre</label>
                
            </div>
            {/* Input Primer Apellido */}
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingLN1" placeholder="Paolo" name="LastName"  value={formik.value.LastName} onChange={formik.handleChange}
                />
                <label htmlFor="floatingLN1">Primer Apellido</label>
            </div>
            {/* Input Segundo Apellido */}
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingLN2" placeholder="Cordero" name="SecLastName"  value={formik.value.SecLastName} onChange={formik.handleChange}
                />
                <label htmlFor="floatingLN2">Segundo Apellido</label>
            </div>
            {/* Input Correo Electronico */}
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingemail" placeholder="name@example.com" name="Email"  value={formik.value.Email} onChange={formik.handleChange}
                />
                <label htmlFor="floatingemail">Correo Electronico</label>
            </div>
            {/* Input Contraseña */}
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="123" name="Password"  value={formik.value.Password} onChange={formik.handleChange}
                />
                <label htmlFor="floatingPassword">Contraseña</label>
            </div>
            {/* Input Rol */}
            {/*<div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingRol" placeholder="admin" name="Rol"  onChange={
                    (event) => { 
                        setRolReg(event.target.value)
                }} 
                />
                <label htmlFor="floatingPassword">Rol</label>
            </div>*/}
            <div>
                <button onClick={agregarRegistro} className='submit'>Registrar</button>
                <h4>{registerStatus}</h4>
            </div>
            </div>
            </div>
        </div>
    );
};

export default SignupForm;