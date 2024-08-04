import React, { useState } from 'react';

const HomeSearchBar = ({ products, categories, offers, onResults }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value) {
            const lowerCaseValue = value.toLowerCase();

            const filteredProducts = products.filter(product => 
                product.product_name.toLowerCase().includes(lowerCaseValue)
            );

            const filteredCategories = categories.filter(category => 
                category.category_name.toLowerCase().includes(lowerCaseValue)
            );

            const filteredOffers = offers.filter(offer => 
                offer.product_name.toLowerCase().includes(lowerCaseValue)
            );

            const combinedResults = [...filteredProducts, ...filteredCategories, ...filteredOffers];

            setSuggestions(combinedResults);
            setIsDropdownVisible(true);
            onResults(combinedResults); 
        } else {
            setSuggestions([]);
            setIsDropdownVisible(false);
            onResults([...products, ...categories, ...offers]);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            onResults(suggestions);
            setIsDropdownVisible(false);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion.product_name || suggestion.category_name || suggestion.offer_name);
        setSuggestions([]);
        setIsDropdownVisible(false);
        onResults([suggestion]); 
    };

    return (
        <div className="home-search-bar">
            <label htmlFor="search-input" className="search-label">Buscador</label>
            <div className="input-container">
                <input
                    type="text"
                    id="search-input"
                    placeholder="Buscar ofertas, categorías, productos..."
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setIsDropdownVisible(true)}
                />
                {searchTerm && (
                    <button className="clear-button" onClick={() => handleInputChange({ target: { value: '' } })}>
                        &times;
                    </button>
                )}
                {isDropdownVisible && suggestions.length > 0 && (
                    <ul className="suggestions-list">
                        {suggestions.map((item, index) => (
                            <li key={index} onClick={() => handleSuggestionClick(item)}>
                                {item.product_name || item.category_name || item.offer_name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default HomeSearchBar;

