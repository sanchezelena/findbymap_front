import React from 'react';

const SearchBar = ({ onSearch }) => {
    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Busca tu producto" 
                onChange={onSearch} 
            />
        </div>
    );
};

export default SearchBar;
