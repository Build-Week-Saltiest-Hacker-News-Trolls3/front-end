import Styled from 'styled-components';

export const PageContainer = Styled.div`
background-color: #f6f6ef;
height: 100%;
width: 80%;
margin: 0 auto;
padding-top: 7%;
@media (max-width:500px){
    padding-top: 30%;  
   }

h1, h2{
    color: #828282;
}
`
export const LoadingMessage = Styled.h2`
color: #828282;
`

export const TitleContainer = Styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: baseline;
border-bottom: 1px solid #828282;
`
export const PageTitle = Styled.h2``
export const PageSubtitle = Styled.h4``