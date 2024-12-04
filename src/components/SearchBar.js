import React, { useState } from 'react';
import './components.css';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for movies, TV shows..."
        value={searchTerm}
        onChange={handleInputChange}
        className="search-input"
      />
      <button onClick={handleSearchClick} className="search-button login-button">Search</button>
    </div>
  );
}

export default SearchBar;