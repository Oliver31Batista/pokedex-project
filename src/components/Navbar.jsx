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
            <div>❤</div>
        </nav>
    );
};

export default Navbar;