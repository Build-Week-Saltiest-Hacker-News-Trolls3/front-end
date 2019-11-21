import Styled from 'styled-components';

export const Card = Styled.div`
border-bottom: 1px solid #828282;
padding 0 1%;
h2{
    color: #828282;

    @media (max-width: 500px){
        font-size: 1.2rem;
    }
}
`
export const ScoreContainer = Styled.div`
    display: flex;
    flex-direction: row;
`;

export const Score = Styled.h3`
    margin: 0;
    padding: 0;
`