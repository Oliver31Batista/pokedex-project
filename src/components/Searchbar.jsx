import React from "react";
import '../css/Searchbar.css'
import { useState } from "react";
import { searchPokemons } from "../api";

const Searchbar = () => {
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState('');

    const onChange = (event) => {
        console.log(event.target.value)
        setSearch(event.target.value);
    }

    const onClick = async (event) => {
        const data = await searchPokemons(search);
        setPokemon(data);
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