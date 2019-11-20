import React from 'react';
import { Link } from 'react-router-dom';
import { FormContainer, SuccessContainer, FormButton } from '../../styles/FormStyles';

const SuccessPage = () => {

    return (
        <FormContainer>
           <SuccessContainer>
                <h1>you've successfully registered!</h1>
                <Link to="/" style={{margin:'10%'}}>
                    <FormButton >login</FormButton>
                </Link>
            </SuccessContainer>
        </FormContainer>
    )

}

export default SuccessPage;