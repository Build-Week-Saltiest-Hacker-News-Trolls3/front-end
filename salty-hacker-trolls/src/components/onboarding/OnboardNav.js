import React from 'react';
import { NavTitle, NavContainer, Nav, Links, StyledNavLink } from '../../styles/NavStyles';

const OnboardNav = () => {

    return(
        <NavContainer className='nav-container'>
            <Nav className='nav-bar'>
                <NavTitle className='nav-title'>Hacker News' Saltiest Trolls</NavTitle>
                <Links className='links-container'>
                    <StyledNavLink to='/' className='login-link'>login</StyledNavLink>
                    <p> | </p>  
                    <StyledNavLink to='/registration' className='signup-link'>sign up</StyledNavLink>
                </Links>
            </Nav>
        </NavContainer>
    )
}

export default OnboardNav;