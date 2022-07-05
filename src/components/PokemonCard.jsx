import React, { useContext, useState } from "react";
import FavoriteContext from "../context/favoritesContext";
import "../css/Pokemon.css";
import expandArrows from "../imgs/expandArrows.svg"
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";

const Pokemon = ({ pokemon }) => {
  const [isOpenModalPokemon, openModalPokemon, closeModalPokemon] = useModal(false);
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

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
          <div onClick={openModalPokemon}><img src={expandArrows} alt="expand arrows" />
            <Modal isOpen={isOpenModalPokemon} closeModal={closeModalPokemon}>
              <h3>Pokemon</h3>
              <p>Hola, este es el contenido de mi modal pokemon</p>
              <img src="https:placeimg.com/400/410/animals" alt='modalPokemon'/>
            </Modal>
        </div>
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
