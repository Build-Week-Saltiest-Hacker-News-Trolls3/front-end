import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axiosWithAuth from '../../utils/AxiosWithAuth';
import { FormContainer, StyledForm, FormHeader, InputWrapper, FormLabel, FormField, FormButton } from '../../styles/FormStyles';

const LoginForm = ({values, errors, touched, status }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        status && setUsers(users => [...users, status]);
    }, [status]);

    return(
        <FormContainer>
            <StyledForm>
                <FormHeader>Log In</FormHeader>
                
                <InputWrapper>
                <FormLabel>Username</FormLabel>
                <FormField placeholder='Username' type='text' name='username'/>{touched.username && errors.username && ( <p className='errors'>{errors.username}</p>)}
                </InputWrapper>

                <InputWrapper>
                <FormLabel>Password</FormLabel>
                <FormField placeholder='Password' type='password' name='password'/>{touched.password && errors.password && ( <p className='errors'>{errors.password}</p>)}
                </InputWrapper>

                <FormButton type='submit'>Log In</FormButton>
            </StyledForm>
        </FormContainer>
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