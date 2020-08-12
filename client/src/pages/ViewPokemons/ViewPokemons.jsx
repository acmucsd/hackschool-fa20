import React, { useState, useEffect } from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
// TODO: Uncomment the two lines below after merging with Henry's branch
// import Navbar from '../../components/Navbar/index';
// import API from '../../API';

// TODO: Remove the below line once merged with Henry's branch
import pokemons from '../../data/pokemon-data.json';


const ViewPokemons = () => {

    const [filter, setFilter] = useState("All");

    // Probably looks like this or something lol please change if it's wrong
    /* const pokemonList;
       useEffect(() => {
       API.getAllPokemons()
       .then((response) => {
           pokemonList = response;
       })
    }, []) */

    // TODO: Replace code about hard-coded data once API is done
    const pokemonList = pokemons.pokemons;
    const [body, setBody] = useState(pokemonList);

    let renderedPokemons = false;

    const currentPokemons = body.map((pokemon) => {
        const appears = filter==="All" || pokemon.type1===filter || pokemon.type2===filter;
        if(appears){renderedPokemons = true;}
        return (appears && <PokemonCard image={pokemon.image} name={pokemon.name}
            desc={pokemon.desc} type1={pokemon.type1} type2={pokemon.type2} moves={pokemon.moves} />);
    })

    const handleTypeChange = (event) => {
        setFilter(event.target.value);
    }

    useEffect(() => {
        setBody(pokemonList);
    }, [])

    /* TODO: Once routing is done, replace the link with a link to the Create Pokemon page*/
    const emptyList = () => {
        return(
            <div>
            <p>No pokemons with the corresponding types found :(</p>
            <p>Try changing the filter, or create a pokemon <a href="/">here</a></p>
            </div>
        );
    }

    const listBody = () => {
        return renderedPokemons ? currentPokemons : emptyList(); 
    }

    return (
        <div>
            <label htmlFor="type">Filter by type:{'\u00A0'}</label>
            <select id="type" name="type" onChange={handleTypeChange}>
                <option value="All">All</option>
                <option value="Normal">Normal</option>
                <option value="Fire">Fire</option>
                <option value="Water">Water</option>
                <option value="Grass">Grass</option>
                <option value="Electric">Electric</option>
                <option value="Psychic">Psychic</option>
                <option value="Ice">Ice</option>
                <option value="Dragon">Dragon</option>
                <option value="Dark">Dark</option>
                <option value="Fairy">Fairy</option>
                <option value="Fighting">Fighting</option>
                <option value="Flying">Flying</option>
                <option value="Poison">Poison</option>
                <option value="Ground">Ground</option>
                <option value="Rock">Rock</option>
                <option value="Bug">Bug</option>
                <option value="Ghost">Ghost</option>
                <option value="Steel">Steel</option>
            </select>
            <br/>

            {listBody()}
        </div>
    );
}

export default ViewPokemons;