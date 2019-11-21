import React, { useState, useEffect } from 'react';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import axiosWithAuth from '../../utils/AxiosWithAuth';
import { FormContainer, StyledForm, FormHeader, InputWrapper, FormLabel, FormField, FormButton } from '../../styles/FormStyles';
import { connect } from 'react-redux';
import { setUserID } from '../../actions'

const LoginForm = ({values, errors, touched, status }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        status && setUsers(users => [...users, status]);
    }, [status]);

    return(
        <FormContainer className='form-container'>
            <StyledForm className='styled-form'>
                <FormHeader className='form-header'>login</FormHeader>
                
                <InputWrapper className='input-wrapper'>
                    <FormLabel className='form-label'>username:</FormLabel>
                    <FormField className='form-field' placeholder=' ...' type='text' name='username'/>{touched.username && errors.username && ( <p className='errors'>{errors.username}</p>)}
                </InputWrapper>
                
                <InputWrapper className='input-wrapper'>
                    <FormLabel className='form-label'>password:</FormLabel>
                    <FormField className='form-field' placeholder=' ...' type='password' name='password'/>{touched.password && errors.password && ( <p className='errors'>{errors.password}</p>)}
                </InputWrapper>

                <FormButton className='form-button' type='submit'>submit</FormButton>
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
        password: Yup.string().required().min(3)
    }),
    handleSubmit(values, {props, setStatus}){   
        console.log('Values', values)
        console.log('Props', props)
        axiosWithAuth()
            .post('/api/auth/login', values)
            .then(response => {
                localStorage.setItem('token', response.data.payload);
                setStatus(response.data);
                console.log('Response', response);
                props.setUserID(response.data.id)
                props.history.push('/feed')
            })
            .catch(error => console.log('No dice.', error.response));
    }
})(LoginForm);

export default connect(null, { setUserID })(FormikLoginForm);