import Styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = Styled.div`
text-align: center;
`

export const Nav = Styled.nav`
width: 78%;
margin: 1% auto;
background: #f56603;
display: flex;
justify-content: space-between;
align-items: center;
max-width: 100%;
padding: 0 1%;

p{
    font-size: 1.6rem;
}
`

export const NavTitle = Styled.h1`
padding: 0 1%;
white-space: nowrap;
`

export const Links = Styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

export const StyledNavLink = Styled(NavLink)`
font-size: 1.6rem;
text-decoration: none;
color: black;
white-space: nowrap;
max-width: 100%
`
