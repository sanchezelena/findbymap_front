import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/navbar.css';

const NavbarTop = () => {
    return (
        <nav className="navbar-top">
            <div className="navbar-logo">
                <img src={logo} alt="FindByMap" />
            </div>
            <div className="navbar-title">
            <Link to="/"><h1>Find By Map</h1></Link>
            </div>
            <div className="navbar-login">
                <Link to="/login">Inicio de Sesión</Link>
            </div>
        </nav>
    );
};

export default NavbarTop;
