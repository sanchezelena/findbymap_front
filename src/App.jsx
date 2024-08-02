import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Offert from './pages/Offerts';
import './styles/index.css'

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/offers" element={<Offert />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;