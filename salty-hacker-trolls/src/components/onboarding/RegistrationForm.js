import React, { useState, useEffect } from 'react';
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
                <FormHeader>create account</FormHeader>

                <InputWrapper>
                    <FormLabel>username:</FormLabel>
                    <FormField placeholder=' ...' type='text' name='username'/>{touched.username && errors.username && ( <p className='errors'>{errors.username}</p>)}
                </InputWrapper>
                
                <InputWrapper>
                    <FormLabel>password:</FormLabel>
                    <FormField placeholder=' ...' type='password' name='password'/>{touched.password && errors.password && ( <p className='errors'>{errors.password}</p>)}
                </InputWrapper>

                <FormButton type='submit'>submit</FormButton>
            </StyledForm>
        </FormContainer>
    )
}
const FormikRegistrationForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || '',
            password: password || '',
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required().min(3),
        password: Yup.string().required().min(6)
    }),
    handleSubmit(values, {props, setStatus}){
        console.log('Values', values)
        axiosWithAuth()
            .post('/api/auth/register', values)
            .then(response => {
                console.log(response);
                props.history.push('/success');
            })
            .catch(error => console.log('No dice.', error.response));
    }

})(RegistrationForm);

export default FormikRegistrationForm;