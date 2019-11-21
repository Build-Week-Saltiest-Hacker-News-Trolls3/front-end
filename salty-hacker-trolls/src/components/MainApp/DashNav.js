import React from 'react';
import { NavTitle, NavContainer, Nav, Links, StyledNavLink } from '../../styles/NavStyles';

const DashNav = () => {

    return (
        <NavContainer className='dash-nav-container'>
            <Nav className='dash-nav'>
                <NavTitle className='nav-title'>HackerNews' SaltiestTrolls</NavTitle>
                <Links className='links-container'>
                    <StyledNavLink className='feed-link' to='/feed'>feed</StyledNavLink>
                    <p> | </p>  
                    <StyledNavLink className='fav-link' to='/favorites'>favorites</StyledNavLink>
                    <p> | </p>  
                    <StyledNavLink className='trolls-link'to='/trolls'>trolls</StyledNavLink>
                    <p> | </p>  
                    <StyledNavLink className='login-link'to='/'>logout</StyledNavLink>
                </Links>
            </Nav>
        </NavContainer>
    )
}

export default DashNav;