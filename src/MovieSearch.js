import React, {useState, useEffect} from "react";
import MovieTile from './MovieTile';
import { api } from './api.js';
import './style.css';

export default function MovieSearch(){
    
    const [searchName, setSearchName] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    
    var handleSearchName = (e) => setSearchName(e.target.value);
    
    var handleSearch = async (e) => {
        e.preventDefault();
        let results = await api.getSearchResults(searchName);
        setSearchResults(results);
    };

    
    return (
        <div>
            <form className="search_form" onSubmit={(e) => handleSearch(e)}>
                <label className="label">SEARCH MOVIE:</label>
                <input 
                    value={searchName} 
                    placeholder="movie title" 
                    className="search_box" 
                    onChange={handleSearchName} 
                    required
                />
                <button type="submit" className="btn">Search</button>
            </form>
            {searchResults.map(result => <MovieTile key={result.id} movie={result}/>)}
        </div>
    )
}