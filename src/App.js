import React from 'react';
import { searchPokemons, getPokemons, getPokemonData } from './api';
import './App.css';
import Navbar from './components/Navbar.jsx'
import ResultsPokedex from './components/ResultsPokedex';
import Searchbar from './components/Searchbar';

const { useState, useEffect } = React;

export default function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url) 
      })
      const results = await Promise.all(promises)
      setPokemon(results);
    } catch (err) {}
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="App">
        <Searchbar />
        <ResultsPokedex
          pokemons = {pokemon} />
      </div>
    </div>
  );
}

