import React from 'react';
import { NavLink } from 'react-router-dom';

const OnboardNav = () => {

    return(
        <div>
            <nav>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/registration'>Sign Up</NavLink>
            </nav>
        </div>
    )
}

export default OnboardNav;