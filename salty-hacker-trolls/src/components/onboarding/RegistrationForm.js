import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import axiosWithAuth from '../../utils/AxiosWithAuth';
import { FormContainer, StyledForm, FormHeader, InputWrapper, FormLabel, FormField, FormButton } from '../../styles/FormStyles';

const RegistrationForm = ({ values, errors, touched, status }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        status && setUsers(users => [...users, status]);
    }, [status]);

    return(
        <FormContainer>
            <StyledForm>
                <FormHeader>Sign Up</FormHeader>
                {/* <Field placeholder='Name' type='text' name='name'/>{touched.name && errors.name && ( <p className='errors'>{errors.name}</p>)}

                <Field placeholder='Email' type='email' name='email'/>{touched.email && errors.email && ( <p className='errors'>{errors.email}</p>)} */}
                <InputWrapper>
                    <FormLabel>Username</FormLabel>
                    <FormField placeholder='Username' type='text' name='username'/>{touched.username && errors.username && ( <p className='errors'>{errors.username}</p>)}
                </InputWrapper>
                
                <InputWrapper>
                    <FormLabel>Password</FormLabel>
                    <FormField placeholder='Password' type='password' name='password'/>{touched.password && errors.password && ( <p className='errors'>{errors.password}</p>)}
                </InputWrapper>

                <FormButton type='submit'>Sign Up</FormButton>
            </StyledForm>
        </FormContainer>
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