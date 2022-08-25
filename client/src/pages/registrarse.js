import React, { useState, useEffect } from 'react';
import SignupForm from '../components/SignupForm.js';
import SigninForm from '../components/SigninForm.js'
import '../styles/Registro.css';



function registrarse() {


    return (
        <div className='Body'>

            <div className='login-container right-panel-active' id='login-container'>
                <div className='form-container sign-up-container'>
                    <SignupForm />
                </div>
                <div className='form-container sign-in-container'>
                    <SigninForm />
                </div>
            </div>

            
        </div>
    )
}

export default registrarse