import React, { useContext, useState } from "react";
import FavoriteContext from "../context/favoritesContext";
import "../css/Pokemon.css";

const Pokemon = ({ pokemon }) => {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };

  const [isFlipped, setIsFlipped] = useState(false);

  const handlerClick = () => {
    setIsFlipped(isFlipped ? false : true);
  };

  return (
    <>
    <div className={isFlipped ? "card-flipped" : "card-not-flipped"} onClick={handlerClick}>
      <div className="pokemon-card">
      <div className="pokemon-img">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
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
    </div>
    </>
  );
};

export default Pokemon;
