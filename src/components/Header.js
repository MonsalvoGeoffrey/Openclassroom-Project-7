import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logored.png';
import '../styles/Header.css'

function Header() {
    return (
        <header>
            <nav className='flex-nav'>
                <img src={logo} alt="Logo" />
                <div className='banner-links'>
                    <Link to="/" className='banner-link'>Accueil</Link>
                    <Link to="/about" className='banner-link'>A propos</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;