import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, isOffer }) => {
    return (
        <div className="product-card">
            <div className="category">{product.category}</div>
            <div className="image-container">
                <img src={product.image} alt={product.product_name} />
            </div>
            <div className={`price ${isOffer ? 'offer-price' : ''}`}>{product.price}€</div>
            <div className="product-name">{product.product_name}</div>
            <div className="units">{product.units}</div>
            <div className="map-link">
                <a href="#">
                <span>Pasillo {product.ubication.aisle} Estante {product.ubication.shelf} </span>
                <span>Mapa</span>
                </a>
            </div>
        </div>
    );
};

export default ProductCard;
