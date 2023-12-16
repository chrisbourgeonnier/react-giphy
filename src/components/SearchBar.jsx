import React from 'react';

function SearchBar({ fetchGiphy }) {
  function handleChange(event) {
    fetchGiphy(event.currentTarget.value);
  }
  return (
    <input type="text" className="form-search form-control" onChange={handleChange} />
  );
}

export default SearchBar;
