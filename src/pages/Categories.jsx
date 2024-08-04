import React, { useState, useEffect } from 'react';
import NavbarSide from '../components/NavbarSide';
import NavbarTop from '../components/NavbarTop';
import SearchBar from '../components/SearchBar';
import CategoryCard from '../components/CategoryCard';
import agua from '../assets/agua.jpg';
import lacteos from '../assets/lacteos.jpg';
import '../styles/index.css';

const Categories = () => {
    const [categories] = useState([
        { id: 1, category_name: 'Agua', image: agua },
        { id: 2, category_name: 'Lácteos', image: lacteos },
        { id: 3, category_name: 'Agua', image: agua },
        { id: 4, category_name: 'Lácteos', image: lacteos },
        { id: 5, category_name: 'Lácteos', image: lacteos },
    ]);
    const [filteredCategories, setFilteredCategories] = useState(categories);

    const handleSearch = (filtered) => {
        setFilteredCategories(filtered);
    };

    return (
        <div className="categories-page">
            <NavbarTop />
            <div className="main-content">
                <NavbarSide />
                <SearchBar data={categories} onResults={handleSearch} searchKey="category_name" />
                <div className="content">
                    <h2>Categorías</h2>
                    <div className="card-container">
                        {filteredCategories.map(category => (
                            <CategoryCard key={category.id} category={category} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;