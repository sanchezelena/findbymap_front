import React, { useState, useEffect } from 'react';
import NavbarSide from '../components/NavbarSide';
import NavbarTop from '../components/NavbarTop';
import HomeSearchBar from '../components/HomeSearchBar';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import aguaFontvella from '../assets/agua_fontvella.jpg';
import lechePascual from '../assets/leche_pascual.jpg';
import agua from '../assets/agua.jpg';
import lacteos from '../assets/lacteos.jpg';
import '../styles/index.css';

const Home = () => {
    const [products, setProducts] = useState([
        { id: 1, product_name: 'Agua Font Vella', category: 'Agua', image: aguaFontvella, price: '2.99', units: 1, ubication: { aisle: '3', shelf: '5' } },
        { id: 2, product_name: 'Leche Pascual', category: 'Lácteos', image: lechePascual, price: '1', units: 1, ubication: { aisle: '7', shelf: '8' } },
        { id: 3, product_name: 'Leche Pascual', category: 'Lácteos', image: lechePascual, price: '1', units: 1, ubication: { aisle: '7', shelf: '8' } },
        { id: 4, product_name: 'Leche Pascual', category: 'Lácteos', image: lechePascual, price: '1', units: 1, ubication: { aisle: '7', shelf: '8' } },
        { id: 5, product_name: 'Leche Pascual', category: 'Lácteos', image: lechePascual, price: '1', units: 1, ubication: { aisle: '7', shelf: '8' } },

    ]);
    const [categories, setCategories] = useState([
        { id: 1, category_name: 'Agua', image: agua },
        { id: 2, category_name: 'Lácteos', image: lacteos },
        { id: 3, category_name: 'Agua', image: agua },
        { id: 4, category_name: 'Lácteos', image: lacteos },
        { id: 5, category_name: 'Lácteos', image: lacteos },

    ]);
    const [offers, setOffers] = useState([
        { id: 1, product_name: 'Agua Font Vella', category: 'Agua', image: aguaFontvella, price: '2.99', units: 1, ubication: { aisle: '3', shelf: '5' } },
        { id: 2, product_name: 'Leche Pascual', category: 'Lácteos', image: lechePascual, price: '1', units: 1, ubication: { aisle: '7', shelf: '8' } },
        { id: 3, product_name: 'Leche Pascual', category: 'Lácteos', image: lechePascual, price: '1', units: 1, ubication: { aisle: '7', shelf: '8' } },
        { id: 4, product_name: 'Leche Pascual', category: 'Lácteos', image: lechePascual, price: '1', units: 1, ubication: { aisle: '7', shelf: '8' } },
        { id: 5, product_name: 'Leche Pascual', category: 'Lácteos', image: lechePascual, price: '1', units: 1, ubication: { aisle: '7', shelf: '8' } },

    ]);
    const [filteredData, setFilteredData] = useState({
        products: products,
        categories: categories,
        offers: offers,
    });

    const handleSearchResults = (results) => {
        setFilteredData(results);
    };

    return (
        <div className="home-page">
            <NavbarTop />
            <div className="main-content">
                <NavbarSide />
                <HomeSearchBar 
                    products={products} 
                    categories={categories} 
                    offers={offers} 
                    onResults={handleSearchResults} 
                />
                <div className="content">
                    <div className="section offers">
                        <h2>Ofertas</h2>
                        <div className="card-container">
                            {filteredData.offers && filteredData.offers.map(offer => (
                                <ProductCard key={offer.id} product={offer} isOffer={true} />
                            ))}
                        </div>
                    </div>
                    <div className="section categories">
                        <h2>Categorías</h2>
                        <div className="card-container">
                            {filteredData.categories && filteredData.categories.map(category => (
                                <CategoryCard key={category.id} category={category} />
                            ))}
                        </div>
                    </div>
                    <div className="section products">
                        <h2>Productos</h2>
                        <div className="card-container">
                            {filteredData.products && filteredData.products.map(product => (
                                <ProductCard key={product.id} product={product} isOffer={false} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;