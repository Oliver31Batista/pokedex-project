import React from 'react';
import { searchPokemons, getPokemons, getPokemonData } from './api';
import './App.css';
import Navbar from './components/Navbar.jsx'
import Pokemon from './components/Pokemon';
import ResultsPokedex from './components/ResultsPokedex';
import Searchbar from './components/Searchbar';
import { FavoriteProvider } from './context/favoritesContext';

const { useState, useEffect } = React;

const localStorageKey = "favorite_pokemon";

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(20, 20 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url) 
      })
      const results = await Promise.all(promises)
      setPokemon(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 10));
      setNotFound(false);
    } catch (err) {}
  }

  const loadFavoritePokemons = () => {
    const pokemons = 
      JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
    setFavorites(pokemons);
  }

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
      const result = await searchPokemons(pokemon);
      if(!result) {
        setNotFound(true);
        setLoading(false);
        setSearching(true);
        return;
      } else {
        setPokemon([result])
        setPage(0);
        setTotal(1);
      }
    setLoading(false);
    setSearching(false);
  }

  useEffect(() => {
    loadFavoritePokemons();
  }, [])
   
  useEffect(() => {
    if(!searching){
      fetchPokemons();
    }
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const updated = [...favorites]
    const isFavorite = favorites.indexOf(name);
      if(isFavorite >=0) {
        updated.splice(isFavorite, 1);
      } else {
        updated.push(name);
      }
      setFavorites(updated);
      window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
  };

  return (
    <FavoriteProvider 
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons
      }} 
    >
    <div>
      <Navbar />
      <div className="App">
        <Searchbar onSearch={onSearch} />
        {notFound ? (
        <div>No se encontro el pokemon que buscabas</div>
        ):(
          <ResultsPokedex
            loading = {loading}
            pokemons = {pokemon}
            page = {page}
            setPage = {setPage}
            total = {total} />
        )}
        </div>
    </div>
    </ FavoriteProvider>
  );
}
