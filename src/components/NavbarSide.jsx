import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const NavbarSide = () => {
    return (
        <nav className="navbar-side">
            <Link to="/offers">Ofertas</Link>
            <Link to="/categories">Categorías</Link>
            <Link to="/products">Productos</Link>
        </nav>
    );
};

export default NavbarSide;
