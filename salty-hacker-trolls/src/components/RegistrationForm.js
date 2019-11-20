import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

import axiosWithAuth from '../utils/AxiosWithAuth'

const RegistrationForm = ({ values, errors, touched, status }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        status && setUsers(users => [...users, status]);
    }, [status]);

    return(
        <Form>
            <h1>Sign Up</h1>
            {/* <Field placeholder='Name' type='text' name='name'/>{touched.name && errors.name && ( <p className='errors'>{errors.name}</p>)}

            <Field placeholder='Email' type='text' name='email'/>{touched.email && errors.email && ( <p className='errors'>{errors.email}</p>)} */}

            <Field placeholder='Username' type='text' name='username'/>{touched.username && errors.username && ( <p className='errors'>{errors.username}</p>)}
            
            <Field placeholder='Password' type='text' name='password'/>{touched.password && errors.password && ( <p className='errors'>{errors.password}</p>)}

            <button type='submit'>Sign Up</button>
        </Form>
    )
}
const FormikRegistrationForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            // name: name || '',
            // email: email || '',
            username: username || '',
            password: password || '',
        };
    },
    validationSchema: Yup.object().shape({
        // name: Yup.string().required(),
        // email: Yup.string().email().required(),
        username: Yup.string().required(),
        password: Yup.string().required()
    }),
    handleSubmit(values, {props, setStatus, resetForm}){
        console.log('Values', values)
        console.log("Props", props)
        axiosWithAuth()
            .post('/api/auth/register', values)
            .then(response => {
                setStatus(response.data);
                console.log(response);
                // resetForm({});
            })
            .catch(error => console.log('No dice.', error.response));
    }

})(RegistrationForm);

export default FormikRegistrationForm;