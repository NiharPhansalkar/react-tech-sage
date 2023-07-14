import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/headerStyles/header.css'

const Header = () => (
    <nav>
        <h1>TechSage</h1>
        <main>
            <Link to={'/'}>Home</Link>
            <Link to={'/contact'}>Contact Us</Link>
            <Link to={'/#about'}>About</Link>
            <Link to={'/#brands'}>Brands</Link>
            <Link to={'/services'}>services</Link>
        </main>
    </nav>
);

export default Header;
