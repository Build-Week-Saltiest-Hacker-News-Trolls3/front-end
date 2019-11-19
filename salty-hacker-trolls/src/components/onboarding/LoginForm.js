import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

import axiosWithAuth from '../../utils/AxiosWithAuth';

const LoginForm = ({values, errors, touched, status }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        status && setUsers(users => [...users, status]);
    }, [status]);

    return(
        <Form>
            <h1>Log In</h1>
            <Field placeholder='Username' type='text' name='username'/>{touched.username && errors.username && ( <p className='errors'>{errors.username}</p>)}

            <Field placeholder='Password' type='password' name='password'/>{touched.password && errors.password && ( <p className='errors'>{errors.password}</p>)}

            <button type='submit'>Log In</button>
        </Form>
       
    )
}
const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || '',
            password: password || ''
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required().min(3),
        password: Yup.string().required().min(6)
    }),
    handleSubmit(values, {props, setStatus, resetForm}){
        console.log('Values', values)
        console.log('Props', props)
        axiosWithAuth()
            .post('/api/auth/login', values)
            .then(response => {
                localStorage.setItem('token', response.data.payload);
                setStatus(response.data);
                console.log('Response', response);
                // resetForm({});
                props.history.push('/feed')
            })
            .catch(error => console.log('No dice.', error.response));
    }
})(LoginForm);

export default FormikLoginForm;