import React from "react";
import pokemonLogo from '../imgs/pokemon-logo.webp'
import '../css/Navbar.css'

const Navbar =  () => {

    return (
        <nav>
            <div />
            <div>
                <img 
                    src={pokemonLogo} 
                    alt='Pokemon logo'
                    className="navbar-logo" />
            </div>
            <div>&#10084;&#65039; {100}</div>
        </nav>
    );
};

export default Navbar;