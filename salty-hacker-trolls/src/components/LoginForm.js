import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const LoginForm = ({values, errors, touched, status }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        status && setUsers(users => [...users, status]);
    }, [status]);

    return(
        <Form>
            <h1>Log In</h1>
            <Field placeholder='Username' type='text' name='username'/>{touched.username && errors.username && ( <p className='errors'>{errors.username}</p>)}

            <Field placeholder='Password' type='text' name='password'/>{touched.password && errors.password && ( <p className='errors'>{errors.password}</p>)}

            <button type='submit'>Log In</button>
        </Form>
       
    )
}
const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || '',
            password: password || '',
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().required()
    }),
    handleSubmit(values, {setStatus, resetForm}){
        axios
            .post('https://reqres.in/api/users/', values)
            .then(response => {
                setStatus(response.data);
                console.log(response);
                resetForm({});
            })
            .catch(error => console.log('No dice.', error.response));
    }
})(LoginForm);

export default FormikLoginForm;