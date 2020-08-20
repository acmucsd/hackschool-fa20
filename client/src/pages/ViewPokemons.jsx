import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard/PokemonCard';
import Navbar from '../components/Navbar';
import API from '../API';

// TODO: Remove the below line once merged with Henry's branch
import pokemons from '../data/pokemon-data.json';
import './style.css';


const ViewPokemons = () => {

    const [filter, setFilter] = useState("All");
    const [body, setBody] = useState([]);

    // Probably looks like this or something lol please change if it's wrong
    // let pokemonList = null;
    useEffect(() => {
       API.getPokemon()
       .then((response) => {
           console.log("response:" + JSON.stringify(response));
           setBody(response.data);
       })
    }, []);


    // TODO: Replace code about hard-coded data once API is done
    //const pokemonList = pokemons.pokemons;
    //const [body, setBody] = useState(pokemonList);

    let renderedPokemons = false;

    const currentPokemons = body.map((pokemon) => {
        const appears = filter === "All" || pokemon.type1 === filter || pokemon.type2 === filter;
        if (appears) { renderedPokemons = true; }
        return (appears && <PokemonCard image={pokemon.image} name={pokemon.name}
            description={pokemon.description} type1={pokemon.type1} type2={pokemon.type2} moves={pokemon.moves} />);
    })

    const handleTypeChange = (event) => {
        setFilter(event.target.value);
    }

    /*useEffect(() => {
        setBody(pokemonList);
    }, [])*/

    /* TODO: Once routing is done, replace the link with a link to the Create Pokemon page*/
    const emptyList = () => {
        return (
            <div className="pokemon-empty-result">
                <div className="pokemon-empty-result-inner">
                <p>No pokemons with the corresponding type found :(</p>
                <p>Try changing the filter, or create a pokemon <a href="/">here</a></p>
                </div>
            </div>
        );
    }

    const listBody = () => {
        return renderedPokemons ? currentPokemons : emptyList();
    }

    return (
        <div>
            <Navbar/>
            <h2 className="view-pokemons-header">All Pokemons</h2>
            <div className="pokemon-filter">
                <label htmlFor="type">Filter by type:{'\u00A0'}</label>
                <select id="type" name="type" onChange={handleTypeChange}>
                    <option value="All">All</option>
                    <option value="normal">Normal</option>
                    <option value="fire">Fire</option>
                    <option value="water">Water</option>
                    <option value="grass">Grass</option>
                    <option value="electric">Electric</option>
                    <option value="psychic">Psychic</option>
                    <option value="ice">Ice</option>
                    <option value="dragon">Dragon</option>
                    <option value="dark">Dark</option>
                    <option value="fairy">Fairy</option>
                    <option value="fighting">Fighting</option>
                    <option value="flying">Flying</option>
                    <option value="poison">Poison</option>
                    <option value="ground">Ground</option>
                    <option value="rock">Rock</option>
                    <option value="bug">Bug</option>
                    <option value="ghost">Ghost</option>
                    <option value="steel">Steel</option>
                </select>
            </div>
            <br />

            {listBody()}
        </div>
    );
}

export default ViewPokemons;