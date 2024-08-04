import React, { useState, useEffect } from 'react';
import NavbarSide from '../components/NavbarSide';
import NavbarTop from '../components/NavbarTop';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import aguaFontvella from '../assets/agua_fontvella.jpg';
import lechePascual from '../assets/leche_pascual.jpg';
import '../styles/index.css';

const Products = () => {
    const [products] = useState([
        { id: 1, product_name: 'Agua Font Vella', category: 'Agua', image: aguaFontvella, price: '2.99', units: 1, ubication: { aisle: '3', shelf: '5' } },
        { id: 2, product_name: 'Leche Pascual', category: 'Lácteos', image: lechePascual, price: '1', units: 1, ubication: { aisle: '7', shelf: '8' } },
        { id: 3, product_name: 'Leche Pascual', category: 'Lácteos', image: lechePascual, price: '1', units: 1, ubication: { aisle: '7', shelf: '8' } },
        { id: 4, product_name: 'Leche Pascual', category: 'Lácteos', image: lechePascual, price: '1', units: 1, ubication: { aisle: '7', shelf: '8' } },
        { id: 5, product_name: 'Leche Pascual', category: 'Lácteos', image: lechePascual, price: '1', units: 1, ubication: { aisle: '7', shelf: '8' } },
        { id: 6, product_name: 'Agua Font Vella', category: 'Agua', image: aguaFontvella, price: '2.99', units: 1, ubication: { aisle: '3', shelf: '5' } },
        { id: 7, product_name: 'Leche Pascual', category: 'Lácteos', image: lechePascual, price: '1', units: 1, ubication: { aisle: '7', shelf: '8' } },
        { id: 8, product_name: 'Agua Font Vella', category: 'Agua', image: aguaFontvella, price: '2.99', units: 1, ubication: { aisle: '3', shelf: '5' } },
        { id: 9, product_name: 'Leche Pascual', category: 'Lácteos', image: lechePascual, price: '1', units: 1, ubication: { aisle: '7', shelf: '8' } },
    
    ]);
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleSearch = (filtered) => {
        setFilteredProducts(filtered);
    };

    return (
        <div className="products-page">
            <NavbarTop />
            <div className="main-content">
                <NavbarSide />
                <SearchBar data={products} onResults={handleSearch} searchKey="product_name" />
                <div className="content">
                    <h2>Productos</h2>
                    <div className="card-container">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
