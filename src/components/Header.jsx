import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../styles/headerStyles/header.css';

function Header() {
  return (
    <nav>
      <h1>TechSage</h1>
      <main>
        <HashLink to="/#home">Home</HashLink>
        <Link to="/contact">Contact Us</Link>
        <HashLink to="/#about">About</HashLink>
        <HashLink to="/#brands">Brands</HashLink>
        <Link to="/services">services</Link>
      </main>
    </nav>
  );
}

export default Header;
