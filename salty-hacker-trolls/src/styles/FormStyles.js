import React from 'react';
import Styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormContainer = Styled.div`
background-color: tomato;
height: 100vh;
margin: 0;
`

export const StyledForm = Styled(Form)`
background-color: whitesmoke;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
margin: 15% auto;
box-shadow: 5px 10px 10px;
width: 50%;

p{
    color: darkred;
    font-size 1.6rem;
}
`

export const FormHeader = Styled.h1`
font-size: 2.4rem;
`

export const InputWrapper = Styled.div`
width: 80%;
text-align: center;
justify-content: space-between;
align-items: center;
`

export const FormLabel = Styled.label`
font-size: 2rem;

`

export const FormField = Styled(Field)`
height: 45px;
width: 300px;
margin: 2%;
font-size: 1.6rem;
`
export const FormButton = Styled.button`
height: 60px;
width: 150px;
margin: 5% auto;
font-size: 2rem;
border-radius: 5px;
background: tomato;
color: whitesmoke;
`
