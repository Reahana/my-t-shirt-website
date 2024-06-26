import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/review'>Order Review</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/grandpa'>Grandpa</Link>
        </nav>
    );
};

export default Nav;