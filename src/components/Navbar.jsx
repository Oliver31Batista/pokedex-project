import React, { useContext } from "react";
import pokemonLogo from '../imgs/pokemon-logo.webp'
import '../css/Navbar.css'
import FavoriteContext from "../context/favoritesContext";


const Navbar =  () => {

    const { favoritePokemons } = useContext(FavoriteContext);
    console.log(favoritePokemons);

    return (
        <nav>
            <div />
            <div>
                <img 
                    src={pokemonLogo} 
                    alt='Pokemon logo'
                    className="navbar-logo" />
            </div>
            <div>&#10084;&#65039; {favoritePokemons.length}</div>
        </nav>
    );
};

export default Navbar;