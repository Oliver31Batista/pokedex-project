import React from "react";
import { useState } from "react";
import { searchPokemon } from "../api";

const Searchbar = () => {
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState('');

    const onChange = (event) => {
        console.log(event.target.value)
        setSearch(event.target.value);
    }

    const onClick = async (event) => {
        const data = await searchPokemon(search);
        setPokemon(data);
    }

    return (
        <div>
            <div>
                <input 
                    type="text"
                    placeholder="Search pokemon..."
                    onChange={onChange} />
            </div>
            <div>
                <button
                    onClick={onClick}>
                    Search
                </button>
            </div>
            <div>
                {pokemon &&
                    <div>
                        <div>Nombre: {pokemon.name}</div>
                        <div>Peso: {pokemon.weight}</div>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </div>
                }
            </div>
        </div>
    );
};

export default Searchbar;