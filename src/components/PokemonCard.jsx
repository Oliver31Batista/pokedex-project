import React, { useContext, useState } from "react";
import FavoriteContext from "../context/favoritesContext";
import "../css/Pokemon.css";
import expandArrows from "../imgs/expandArrows.svg";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";

const Pokemon = ({ pokemon }) => {
  const [isOpenModalPokemon, openModalPokemon, closeModalPokemon] =
    useModal(false);
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;
  const typeColors = {
    electric: "#FFD700",
    normal: "#B09398",
    fire: "#FF675C",
    water: "#0596C7",
    ice: "#AFEAFD",
    rock: "#999799",
    flying: "#7AE7C7",
    grass: "#4A9681",
    psychic: "#FFC6D9",
    ghost: "#561D25",
    bug: "#A2FAA3",
    poison: "#795663",
    ground: "#D2B074",
    dragon: "#DA627D",
    steel: "#1D8A99",
    fighting: "#2F2F2F",
    default: "#2A1A1F",
  };

  const pokeTypes = document.querySelector("[data-poke-types]");
  const pokeCard = document.querySelector("[data-poke-card]");
  const pokeName = document.querySelector("[data-poke-name]");
  const pokeImg = document.querySelector("[data-poke-img]");
  const pokeImgContainer = document.querySelector(
    "[ data-poke-img-container-shiny]"
  );
  const pokeImgShiny = document.querySelector("[data-poke-img-shiny]");
  const pokeId = document.querySelector("[data-poke-id]");

  const renderPokemonData = pokemon => {
    const sprite = pokemon.sprites.front_default;
    const spriteShiny = pokemon.sprites.front_shiny;
    pokeName.textContent = pokemon.name;
    pokeImg.setAttribute('src', sprite);
    pokeImgShiny.setAttribute('src', spriteShiny);
    pokeId.textContent = `N° ${pokemon.id}`;
    setTypesColor(types);
    renderPokemonTypes(types);
  }

  const setTypesColor = (types) => {
    const colorOne = typeColors[types[0].type.name];
    const colorTwo = types[1]
      ? typeColors[types[1].type.name]
      : typeColors.default;
    pokeImg.style.background = `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
    pokeName.style.color = colorOne;
    pokeId.style.color = colorTwo;
    pokeImg.style.backgroundSize = " 5px 5px";
    pokeCard.style.background = `linear-gradient(var(--rotate), ${colorOne}, ${typeColors.default} 43%, ${colorTwo});`;
  };

  const renderPokemonTypes = (types) => {
    pokeTypes.innerHTML = "";
    types.forEach((type) => {
      const typeTextElement = document.createElement("div");
      typeTextElement.style.color = typeColors[type.type.name];
      typeTextElement.textContent = type.type.name;
      pokeTypes.appendChild(typeTextElement);
    });
  };

  const types = pokemon.types;
  renderPokemonTypes(types);

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };

  const [isFlipped, setIsFlipped] = useState(true);

  const handlerClick = () => {
    setIsFlipped(isFlipped ? false : true);
    console.log("flip", isFlipped);
  };

  return (
    <>
      <div className="pokemon-card">
        <div className="pokemon-img">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <div className="card-body">
          <div className="card-top">
            <h3>{pokemon.name}</h3>
            <div>#{pokemon.id}</div>
            <div onClick={openModalPokemon}>
              <img src={expandArrows} alt="expand arrows" />
            </div>
            <Modal isOpen={isOpenModalPokemon} closeModal={closeModalPokemon}>
            <div data-poke-card className="poke-card">
            <div data-poke-name className="poke-name"></div>
                <div data-poke-img-container className="img-container">
                    <img data-poke-img className="poke-img" src="../imgs/pngwing.com.png" alt="pokemon"/>
                </div>
                <div data-poke-id className="poke-id"></div>
                <div data-poke-types className="poke-types"></div>
        </div>
            </Modal>
          </div>
          <div className="card-bottom">
            <div className="pokemon-type">
              {pokemon.types.map((type, idx) => {
                return (
                  <div key={idx} className="pokemon-type-text">
                    {type.type.name}
                  </div>
                );
              })}
            </div>
            <button onClick={clickHeart}>
              <div className="favorite-pokemons">{heart}</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pokemon;
