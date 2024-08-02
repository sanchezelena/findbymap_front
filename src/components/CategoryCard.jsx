import React from 'react';
import '../styles/CategoryCard.css';

const CategoryCard = ({ category }) => {
    return (
        <div className="category-card">
            <div className="image-container">
                <img src={category.image} alt={category.category_name} />
            </div>
            <div className="category-link">
                <a href="#">
                    {category.category_name}
                </a>
            </div>
        </div>
    );
};

export default CategoryCard;
