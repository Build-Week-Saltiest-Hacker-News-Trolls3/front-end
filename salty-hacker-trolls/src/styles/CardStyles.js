import Styled from 'styled-components';

export const Card = Styled.div`
padding 1%;
background-color: #f6f6ef;
border: 1px solid #f6f6ef;
border-bottom: 1px solid #828282;
font-size: 1.6rem;
h3{
    color: #828282;
    font-size: 1.6rem;
}
@media (max-width: 500px){
    font-size: 1.2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}
`
export const ScoreContainer = Styled.div`
    display: flex;
    flex-direction: row;
`;

export const Score = Styled.h4`
    margin: 0;
    padding: 0;
`
export const Button = Styled.button`
font-size: 1.2rem;
margin: 1% 0;
background-color: seagreen;
opacity:0.6;
color: white;
border-radius: 5px;
padding: 0.5% 1%;
cursor: pointer;
`