import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavTitle, NavContainer, Nav, Links, StyledNavLink } from '../../styles/NavStyles';

const DashNav = () => {

    return (
        <NavContainer>
            <Nav style={{position:'fixed', left:'10%'}}>
                <NavTitle>Hacker News' Saltiest Troll|comments</NavTitle>
                <Links>
                    <StyledNavLink to='/feed'>feed</StyledNavLink>
                    <p> | </p>  
                    <StyledNavLink to='/favorites'>favorites</StyledNavLink>
                    <p> | </p>  
                    <StyledNavLink to='/'>logout</StyledNavLink>
                </Links>
            </Nav>
        </NavContainer>
    )
}

export default DashNav;