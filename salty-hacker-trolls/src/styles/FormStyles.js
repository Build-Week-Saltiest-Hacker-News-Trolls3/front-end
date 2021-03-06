import Styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormContainer = Styled.div`
background-color: #f6f6ef;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 80%;
margin: 0 auto;
`

export const SuccessContainer = Styled.div`
background-color: whitesmoke;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
margin: 0 auto;
padding: 0 25%;
box-shadow: 2px 10px 15px;
width: 50%;
`

export const StyledForm = Styled(Form)`
background-color: whitesmoke;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
margin: 0 auto;
padding-top: 2%;
box-shadow: 2px 10px 15px;
width: 100%;

p{
    color: darkred;
    font-size 1.6rem;
}
`

export const FormHeader = Styled.h1`
font-size: 2rem;
`

export const InputWrapper = Styled.div`
width: 80%;
text-align: center;
justify-content: space-between;
align-items: center;
`

export const FormLabel = Styled.label`
font-size: 2rem;
color: #828282;
`

export const FormField = Styled(Field)`
height: 45px;
width: 300px;
margin: 2%;
font-size: 1.6rem;
border-radius: 5px;
@media (max-width:500px){
    height 1.2rem;
    width: 15rem;   
   }
`
export const FormButton = Styled.button`
height: 60px;
width: 150px;
margin: 5% auto;
font-size: 2rem;
border-radius: 5px;
background: #f56603;
color: whitesmoke;
cursor: pointer;
`

export const Input = Styled.input`
height: 45px;
width: 300px;
margin: 3%;
font-size: 1.6rem;
border-radius: 5px;
@media (max-width:500px){
    height 1.2rem;
    width: 15rem;   
   }
`