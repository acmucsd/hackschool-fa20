import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import './style.css';

/**
 * Navbar component with buttons that link to pages.
 */
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="title">
                <h1>Pokemon Generator</h1>
            </div>
            <div className="nav-buttons">
                {/* wrap a button within a link, have one for create and view pokemon */}
                <p className="button">Create New Pokemon</p>
                <p className="button">View All Pokemon</p>
            </div>
        </div>
    );
};

export default Navbar;