import React, { useState } from 'react';
import NavbarTop from '../components/NavbarTop';
import '../styles/login.css';
import SubHeader from '../components/SubHeader';
import logo from '../assets/logo.png';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Login data:', { username, password });
    };

    return (
        <div className="login-page">
            <NavbarTop />
            <SubHeader title="Inicia sesión" />
            <div className="login-content">
                <div className="login-logo">
                    <img src={logo} alt="Find By Map" />
                </div>
                <div className="login-container">
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-group">
                            <label htmlFor="username">Nombre de usuario</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="login-button">INICIA SESIÓN</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
