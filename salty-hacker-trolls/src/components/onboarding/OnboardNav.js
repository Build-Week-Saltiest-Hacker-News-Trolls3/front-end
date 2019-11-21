import React from 'react';
import { NavTitle, NavContainer, Nav, Links, StyledNavLink } from '../../styles/NavStyles';

const OnboardNav = () => {

    return(
        <NavContainer className='nav-container'>
            <Nav className='nav-bar'>
                <a href='https://build-week-saltiest-hacker-news-trolls3.github.io/marketing-page/'><NavTitle className='nav-title'>HackerNews' SaltiestTrolls</NavTitle></a>
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