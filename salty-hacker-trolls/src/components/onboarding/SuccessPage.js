import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {

    return (
        <div>
            <h1>You've successfully registered!</h1>
            <Link to="/">
                <button>Log In</button>
            </Link>
        </div>
    )

}

export default SuccessPage;