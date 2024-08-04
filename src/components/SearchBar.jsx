import React, { useState } from 'react';

const SearchBar = ({ data, onResults, searchKey }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value) {
            const filteredData = data.filter(item => 
                item[searchKey].toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredData);
            setIsDropdownVisible(true);
            onResults(filteredData); 
        } else {
            setSuggestions([]);
            setIsDropdownVisible(false);
            onResults(data);
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
        setSearchTerm(suggestion[searchKey]);
        setSuggestions([]);
        setIsDropdownVisible(false);
        onResults([suggestion]);
    };

    return (
        <div className="search-bar">
            <label htmlFor="search-input" className="search-label">Buscador</label>
            <div className="input-container">
                <input 
                    type="text" 
                    id="search-input"
                    value={searchTerm}
                    onChange={handleInputChange} 
                    onKeyDown={handleKeyDown}
                    onFocus={() => setIsDropdownVisible(true)}
                />
                {searchTerm && (
                    <button className="clear-button" onClick={() => handleInputChange({ target: { value: '' }})}>
                        &times;
                    </button>
                )}
                {isDropdownVisible && suggestions.length > 0 && (
                    <ul className="suggestions-list">
                        {suggestions.map(item => (
                            <li key={item.id} onClick={() => handleSuggestionClick(item)}>
                                {item[searchKey]}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
