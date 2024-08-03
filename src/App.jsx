import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Offert from './pages/Offerts';
import './styles/index.css'
import Products from './pages/Products';
import Categories from './pages/Categories';
import Login from './pages/Login';

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/offers" element={<Offert />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/login" element={<Login />} /> 
                </Routes>
            </div>
        </Router>
    );
}

export default App;