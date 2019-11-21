import React from 'react';
import { Link } from 'react-router-dom';
import { FormContainer, SuccessContainer, FormButton } from '../../styles/FormStyles';

const SuccessPage = () => {

    return (
        <FormContainer className='form-container'>
           <SuccessContainer className='success-container'>
                <h1>you've successfully registered!</h1>
                <Link to="/" className='login-link'style={{margin:'10%'}}>
                    <FormButton className='form-button'>login</FormButton>
                </Link>
            </SuccessContainer>
        </FormContainer>
    )

}

export default SuccessPage;