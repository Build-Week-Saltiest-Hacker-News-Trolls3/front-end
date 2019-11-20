import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavTitle, NavContainer, Nav, Links, StyledNavLink } from '../../styles/NavStyles';

const OnboardNav = () => {

    return(
        <NavContainer>
            <Nav>
                <NavTitle>Hacker News' Saltiest Trolls</NavTitle>
                <Links>
                    <StyledNavLink to='/'>login</StyledNavLink>
                    <p> | </p>  
                    <StyledNavLink to='/registration'>sign up</StyledNavLink>
                </Links>
            </Nav>
        </NavContainer>
    )
}

export default OnboardNav;