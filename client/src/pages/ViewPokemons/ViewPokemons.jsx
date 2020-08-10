import React, {useState, useEffect} from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
// Uncomment the two lines below after merging with Henry's branch
// import Navbar from '../../components/Navbar/index';
// import API from '../../API';

// Remove the below line once merged with Henry's branch
import pokemons from '../../data/pokemon-data.json';


const ViewPokemons = () => {

    // Probably looks like this or something lol please feel free to change if wrong
    // const pokemonList = await API.getAllPokemons(); 

    // Replace the line below with the line above once API is done
    const pokemonList = pokemons.pokemons;

    const currentPokemons = pokemonList.map((pokemon) => {
        return(<PokemonCard image={pokemon.image} name={pokemon.name}
        desc={pokemon.desc} type1={pokemon.type1} type2={pokemon.type2} moves={pokemon.moves}/>);
    })

    return(
        <div>
            {currentPokemons}
        </div>
    );
}

export default ViewPokemons;