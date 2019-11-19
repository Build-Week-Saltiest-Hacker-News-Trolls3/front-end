import React from 'react';
import { NavLink } from 'react-router-dom';

const DashNav = () => {

    return (
        <div>
            <nav>
                <NavLink to='/feed'>Feed</NavLink>
                <NavLink to='/favorites'>Favorites</NavLink>
            </nav>
        </div>
    )
}

export default DashNav;