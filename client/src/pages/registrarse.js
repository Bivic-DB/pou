import React, { useState, useEffect } from 'react';
import SignupForm from '../components/SignupForm.js';
import SigninForm from '../components/SigninForm.js'
import '../styles/Registro.css';



function registrarse() {
 

    return (
        <div className='Body'>
            <div class="container" id="container">
            <SignupForm />
            <SigninForm />
            </div>
        </div>
    )
}

export default registrarse