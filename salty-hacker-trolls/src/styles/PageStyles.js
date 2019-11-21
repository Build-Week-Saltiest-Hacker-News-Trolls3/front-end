import Styled from 'styled-components';

export const PageContainer = Styled.div`
background-color: #f6f6ef;
height: 100%;
width: 80%;
margin: 0 auto;
padding: 1% 0;
padding-top: 6%;
@media (max-width:500px){
    padding-top: 25%;
    width: 95%;
   }

h1, h2{
    font-size: 2rem;
    color: #828282;
}
h4{
    font-size: 1.6rem;
}
`
export const LoadingMessage = Styled.h2`
text-align: center;
padding: 0 1%;
color: #828282;
`

export const TitleContainer = Styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: baseline;
border-bottom: 1px solid #828282;
`
export const PageTitle = Styled.h2``
export const PageSubtitle = Styled.h4``
