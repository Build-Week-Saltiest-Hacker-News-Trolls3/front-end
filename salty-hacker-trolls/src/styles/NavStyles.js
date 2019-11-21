import Styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = Styled.div`
text-align: center;
background: white;
padding-top: 1%;
width: 100%;
position: fixed;
z-index: 1;
@media (max-width:500px){
    padding: 0;
   }
`

export const Nav = Styled.nav`
width: 78%;
margin: 0 auto;
background: #f56603;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
align-text: center;
max-width: 100%;
padding: 0 1%;
z-index: 1;
@media (max-width:500px){
    width: 100%;
    justify-content: space-around;
   }
p{
    font-size: 1.2rem;
}
`

export const NavTitle = Styled.h1`
padding: 0 1%;
white-space: nowrap;
font-size: 1.2rem
`

export const Links = Styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

export const StyledNavLink = Styled(NavLink)`
font-size: 1.2rem;
text-decoration: none;
color: black;
white-space: nowrap;
max-width: 100%
`
