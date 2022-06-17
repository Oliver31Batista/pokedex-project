export const searchPokemons = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response  = await fetch(url);
        const data = await response.json();
        return data;
    } catch(err) {

    }
};
console.log('toy jalto')
export const getPokemons = async (limit=0, offset=0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response  = await fetch(url);
        const data = await response.json();
        return data;
    } catch(err) {

    }
};

export const getPokemonData = async (url) => {
    try {
        const response  = await fetch(url);
        const data = await response.json();
        return data;
    } catch(err) {}
}