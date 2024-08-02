import React, { useState } from 'react';
import NavbarSide from '../components/NavbarSide';
import NavbarTop from '../components/NavbarTop';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import aguaFontvella from '../assets/agua_fontvella.jpg';
import lechePascual from '../assets/leche_pascual.jpg';
import '../styles/index.css';

const Offert = () => {
    const [offers, setOffers] = useState([
        { id: 1, product_name: 'Agua Font Vella', category: 'Agua', image: aguaFontvella, price: '2.99', units: 1, ubication: { aisle: '3', shelf: '5' }, isOffer: true },
        { id: 2, product_name: 'Leche Pascual', category: 'Lácteos', image: lechePascual, price: '1', units: 1, ubication: { aisle: '7', shelf: '8' }, isOffer: true },
        { id: 3, product_name: 'Leche Pascual', category: 'Lácteos', image: lechePascual, price: '1', units: 1, ubication: { aisle: '7', shelf: '8' } },
        { id: 4, product_name: 'Leche Pascual', category: 'Lácteos', image: lechePascual, price: '1', units: 1, ubication: { aisle: '7', shelf: '8' } },
        { id: 5, product_name: 'Leche Pascual', category: 'Lácteos', image: lechePascual, price: '1', units: 1, ubication: { aisle: '7', shelf: '8' } },
        { id: 6, product_name: 'Agua Font Vella', category: 'Agua', image: aguaFontvella, price: '2.99', units: 1, ubication: { aisle: '3', shelf: '5' }, isOffer: true },
        { id: 7, product_name: 'Leche Pascual', category: 'Lácteos', image: lechePascual, price: '1', units: 1, ubication: { aisle: '7', shelf: '8' }, isOffer: true },
        { id: 8, product_name: 'Leche Pascual', category: 'Lácteos', image: lechePascual, price: '1', units: 1, ubication: { aisle: '7', shelf: '8' } },
        { id: 9, product_name: 'Leche Pascual', category: 'Lácteos', image: lechePascual, price: '1', units: 1, ubication: { aisle: '7', shelf: '8' } },
        { id: 10, product_name: 'Leche Pascual', category: 'Lácteos', image: lechePascual, price: '1', units: 1, ubication: { aisle: '7', shelf: '8' } },
    ]);

    const handleSearch = (event) => {
        const query = event.target.value;
    };

    return (
        <div className="offert-page">
            <NavbarTop />
            <div className="main-content">
                <NavbarSide />
                <SearchBar onSearch={handleSearch} />
                <div className="content">
                    <div className="section offers">
                        <h2>Ofertas</h2>
                        <div className="card-container">
                            {offers.map(offer => (
                                <ProductCard key={offer.id} product={offer} isOffer={true} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offert;
