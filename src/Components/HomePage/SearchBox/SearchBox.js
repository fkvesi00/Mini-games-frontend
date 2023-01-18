import React from "react";
import './SearchBox.css';

const SearchBox = ({onSearchChange}) => {
    return (
        <div className="searchBox">
            <input type='text' placeholder="Search game..." className="input" onChange={onSearchChange}/>    
        </div>   
    );
}

export default SearchBox;