import React from "react";
import '../css/Searchbar.css'
import { useState } from "react";
import { searchPokemons } from "../api";

const Searchbar = ({onSearch}) => {
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState('');

    const onChange = (event) => {
        setSearch(event.target.value);
    }

    const onClick = async (e) => {
        onSearch(search);
    }

    return (
        <div className = "searchbar-container">
            <div className="searchbar">
                <input 
                    type="text"
                    placeholder="Search pokemon..."
                    onChange={onChange} />
            </div>
            <div className="searchbar-btn">
                <button onClick={onClick}>Search</button>
            </div>
        </div>
    );
};

export default Searchbar;