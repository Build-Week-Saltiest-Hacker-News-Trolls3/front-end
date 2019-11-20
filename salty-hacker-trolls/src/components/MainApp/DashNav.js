import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavTitle, NavContainer, Nav, Links, StyledNavLink } from '../../styles/NavStyles';

const DashNav = () => {

    return (
        <NavContainer>
            <Nav style={{position:'fixed', left:'10%', display:'flex', flexWrap:'wrap'}}>
                <NavTitle>HackerNews' SaltiestTrolls</NavTitle>
                <Links>
                    <StyledNavLink to='/feed'>feed</StyledNavLink>
                    <p> | </p>  
                    <StyledNavLink to='/favorites'>favorites</StyledNavLink>
                    <p> | </p>  
                    <StyledNavLink to='/trolls'>trolls</StyledNavLink>
                    <p> | </p>  
                    <StyledNavLink to='/'>logout</StyledNavLink>
                </Links>
            </Nav>
        </NavContainer>
    )
}

export default DashNav;