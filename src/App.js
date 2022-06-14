import React from 'react';
import { searchPokemons, getPokemons, getPokemonData } from './api';
import './App.css';
import Navbar from './components/Navbar.jsx'
import ResultsPokedex from './components/ResultsPokedex';
import Searchbar from './components/Searchbar';

const { useState, useEffect } = React;

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(2 );
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons(31, 31 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url) 
      })
      const results = await Promise.all(promises)
      setPokemon(results);
      setLoading(false);
    } catch (err) {}
  }

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  return (
    <div>
      <Navbar />
      <div className="App">
        <Searchbar />
          { loading ? 
            <div>Cargando pokemones...</div>
          :
            <ResultsPokedex
              pokemons = {pokemon}
              page = {page}
              setPage = {setPage} />
          }
        </div>
      </div>
    );
  }

