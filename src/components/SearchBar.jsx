import React from 'react';

const SearchBar = ({ onSearch }) => {
    return (
        <div className="search-bar">
            <h2>Busca tu producto</h2>
            <input 
                type="text" 
                placeholder="Busca tu producto" 
                onChange={onSearch} 
            />
        </div>
    );
};

export default SearchBar;
