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
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
console.log('git commit -m"cahnged my old git account to the new one"')
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(10, 10 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url) 
      })
      const results = await Promise.all(promises)
      setPokemon(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 10));
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
            <ResultsPokedex
              loading = {loading}
              pokemons = {pokemon}
              page = {page}
              setPage = {setPage}
              total = {total} />
        </div>
      </div>
    );
  }

