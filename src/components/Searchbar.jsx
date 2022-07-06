import React from "react";
import "../css/Searchbar.css";
import { useState } from "react";
import { searchPokemons } from "../api";
import { FaBeer } from "react-icons/fa"


const Searchbar = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState("");

  const input = document.getElementsByTagName("input")[0];
  const clearInput = () => {
    if(input){
        input.value = "";
    }    
  }

  const clearBtn = document.getElementById("clear-btn");

  if(clearBtn) {
    clearBtn.addEventListener("click", clearInput);
  }

  const onChange = (event) => {
    setSearch(event.target.value);
    if (event.targue.value.length === 0) onSearch(null);
  };

  const onClick = async (e) => {
    onSearch(search);
  };

  const onClickClear = async (e) => {
    onSearch(null)
  }

  return (
    <div className="searchbar-container">
      <div className="searchbar"></div>
      <form>
        <input
          type="search"
          required
          className="search-bar"
          onChange={onChange}
        />
        <i className="fa fa-search" onClick={onClick}><img src={FaBeer} alt="search-icon" /></i>
        <a id="clear-btn" onClick={onClickClear}>Clear</a>
        
      </form>
      
    </div>
  );
};

export default Searchbar;
