import React, { useState, useEffect } from 'react';
// axios ayuda a poder requerir la información a alguna API ya sea pública o privada
import Axios from 'axios';
import '../styles/Registro.css';
import Swal from 'sweetalert2';
import {Routes, Route, useNavigate} from 'react-router-dom';

let err_quantity = 0;

function SignupForm() {

    const initialValues = { NameReg: "", LastNameReg: "", SecLastNameReg: "", EmailReg: "", PasswordReg: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormValues({ ...formValues, [name]:value });
    };

    let [RolReg, setRolReg] = useState("");
    const [registerStatus, setregisterStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        if(err_quantity==0){
            setIsSubmit(true);
            agregarRegistro(formValues);
        }else{
            console.log("Validación Incompleta")
        }
        
    };

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
        }
    }, [formErrors]);

    const validate = (values) => {
        err_quantity = 0
        const errors = {};
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if(!values.NameReg){
            errors.NameReg = "Se requiere un nombre";
            err_quantity++;
        }
        if(!values.LastNameReg){
            errors.LastNameReg = "Se requiere un apellido";
            err_quantity++;
        }
        if(!values.SecLastNameReg){
            errors.SecLastNameReg = "Se requiere un segundo apellido";
            err_quantity++;
        }
        if(!values.EmailReg){
            errors.EmailReg = "Se requiere un correo";
            err_quantity++;
        } else if (!regex.test(values.EmailReg)){
            errors.EmailReg = "Formato no válido";
            err_quantity++;
        }
        if(!values.PasswordReg){
            err_quantity++;
            errors.PasswordReg = "Se requiere una contraseña";
        } else if(values.PasswordReg.length < 4 ){
            err_quantity++;
            errors.PasswordReg = "Contraseña demasiado corta";
        } else if(values.PasswordReg.length > 15){
            err_quantity++;
            errors.PasswordReg = "Contraseña demasiado larga";
        }
        return errors;
    };
    const agregarRegistro = (values) => {
        if (/@est.cedesdonbosco.ed.cr\s*$/.test(values.EmailReg) || /@cedesdonbosco.ed.cr\s*$/.test(values.EmailReg)) {
            //setRolReg("2");
            RolReg = "2"
            console.log(RolReg);
        } else {
            //setRolReg("3");
            RolReg = "3"
            console.log(RolReg);
        }
        Axios.post('https://bivic-db-deploy.herokuapp.com/Registro', {
            // Objeto con las propiedades que queremos enviar
            Name: values.NameReg,
            LastName: values.LastNameReg,
            SecLastName: values.SecLastNameReg,
            Email: values.EmailReg,
            Password: values.PasswordReg,
            Rol: RolReg,
        }).then(() => {
            //setregisterStatus("Usuario Registrado");
            Swal.fire(
                'Aviso',
                'El usuario se ha registrado correctamente',
                'success'
            ).then(function() {
                navigate('/Inicio');
            });
        })
        
        
        
    };

    return (
        <div className='Contenedor-Registro'>
            <div className='FormR'>
                <h1 id='HeaderTitleR'>Crear cuenta</h1>

                <div className='OrgR'>
                    <form>
                    {/* Input Nombre */}
                    <div className="">
                        <label htmlFor="floatingName" className='form-label'>Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="floatingName"
                            name="NameReg"
                            onChange={handleChange}
                            value={formValues.NameReg}
                        />
                        <p className='errors'>{formErrors.NameReg}</p>
                    </div>
                    {/* Input Primer Apellido */}
                    <div className="">
                    <label htmlFor="floatingLN1" className='form-label'>Primer Apellido</label>
                        <input
                            type="text"
                            className="form-control"
                            id="floatingLN1"
                            name="LastNameReg"
                            value={formValues.LastNameReg}
                            onChange={handleChange}
                        />
                        <p className='errors'>{formErrors.LastNameReg}</p>
                    </div>
                    {/* Input Segundo Apellido */}
                    <div className="">
                    <label htmlFor="floatingLN2" className='form-label'>Segundo Apellido</label>
                        <input
                            type="text"
                            className="form-control"
                            id="floatingLN2"
                            name="SecLastNameReg"
                            value={formValues.SecLastNameReg}
                            onChange={handleChange}/>
                            
                            <p className='errors'>{formErrors.SecLastNameReg}</p>
                        
                    </div>
                    {/* Input Correo Electronico */}
                    <div className="">
                    <label htmlFor="floatingemail" className='form-label' >Correo Electronico</label>
                        <input
                            type="text"
                            className="form-control"
                            id="floatingemail"
                            name="EmailReg"
                            value={formValues.EmailReg}
                            onChange={handleChange}
                        />
                        <p className='errors'>{formErrors.EmailReg}</p>
                    </div>
                    {/* Input Contraseña */}
                    <div className="">
                    <label htmlFor="floatingPassword" className='form-label'>Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            name="PasswordReg"
                            value={formValues.PasswordReg}
                            onChange={handleChange}
                        />
                        <p className='errors'>{formErrors.PasswordReg}</p>
                    </div>
                    <div>
                        <button className='submit' onClick={handleSubmit}>Registrar</button>
                        <h4>{registerStatus}</h4>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;

// $2b$10$w51mXPEuyIZbO
// $2b$10$oIg9wciQ2UGgM
// $2b$10$vK7VUM/5VrpAS