import { useState, useEffect} from 'react';

const UserValidation = () => {
    const [values, setValues] = useState({
        Name: '',
        LastName: '',
        SecLastName: '',
        Email: '',
        Password: '',
    })
    const [errors, setErrors] = useState({

    })
    
    const handleChange = e =>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    return {handleChange};
};

export default UserValidation;