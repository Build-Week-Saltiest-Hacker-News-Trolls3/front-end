import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axiosWithAuth from '../../utils/AxiosWithAuth';
import { FormHeader } from '../../styles/FormStyles';

const RegistrationForm = ({ values, errors, touched, status }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        status && setUsers(users => [...users, status]);
    }, [status]);

    return(
        <Form>
            <FormHeader>Sign Up</FormHeader>
            {/* <Field placeholder='Name' type='text' name='name'/>{touched.name && errors.name && ( <p className='errors'>{errors.name}</p>)}

            <Field placeholder='Email' type='email' name='email'/>{touched.email && errors.email && ( <p className='errors'>{errors.email}</p>)} */}
            <label>Username</label>
            <Field placeholder='Username' type='text' name='username'/>{touched.username && errors.username && ( <p className='errors'>{errors.username}</p>)}
            
            <label>Password</label>
            <Field placeholder='Password' type='password' name='password'/>{touched.password && errors.password && ( <p className='errors'>{errors.password}</p>)}

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
        username: Yup.string().required().min(3),
        password: Yup.string().required().min(6)
    }),
    handleSubmit(values, {props, setStatus, resetForm}){
        console.log('Values', values)
        axiosWithAuth()
            .post('/api/auth/register', values)
            .then(response => {
                // setStatus(response.data);
                console.log(response);
                // resetForm({});
                props.history.push('/success');
            })
            .catch(error => console.log('No dice.', error.response));
    }

})(RegistrationForm);

export default FormikRegistrationForm;