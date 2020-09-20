import React from 'react';
import "../assets/css/InputSearch.css"

function InputSearch() {

  return (
    <div className="dropdown-content">
      <input 
        className="input"
        placeholder="Search country" 
        type="text"
        />
        <div className="search">
          <button className="button btn-search">Search</button>
          <button className="button btn-reset">Reset</button>
        </div>

    </div>
    
  );
}

export default InputSearch;
