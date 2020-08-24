import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard/PokemonCard';
import Navbar from '../components/Navbar';
import API from '../API';
import './style.css';


const ViewPokemon = () => {

    const [filter, setFilter] = useState("All");
    const [body, setBody] = useState([]);
    const [loading, setLoading] = useState(true);

    /* Loads the current list of pokemons */
    useEffect(() => {
       API.getPokemon()
       .then((response) => {
           setBody(response.data.pokemon);
           setLoading(false);
       })
    }, []);

    let renderedPokemons = false; // Keeps track of whether we managed to render a pokemon

    /* Renders the list of pokemon that matches the current filter */
    const currentPokemons = body.map((pokemon, i) => {
        const appears = filter === "All" || pokemon.type1 === filter || pokemon.type2 === filter;
        if (appears) { renderedPokemons = true; }
        return (appears && <PokemonCard key={i} image={pokemon.image} name={pokemon.name}
            description={pokemon.description} type1={pokemon.type1} type2={pokemon.type2} moves={pokemon.moves} />);
    })

    /* Changes the filter */
    const handleTypeChange = (event) => {
        setFilter(event.target.value);
    }

    /* Renders a notice if there is no pokemon matching the filter type */
    const emptyList = () => {
        return (
            <div className="pokemon-empty-result">
                <div className="pokemon-empty-result-inner">
                <p>No pokemons with the corresponding type found :(</p>
                <p>Try changing the filter, or create a pokemon <a href="/create">here</a></p>
                </div>
            </div>
        );
    }

    /* Renders currentPokemons, or emptyList, depending on whether we returned pokemons */
    const listBody = () => {
        if(loading){
            return(
                <div className="pokemon-empty-result">
                    <div className="pokemon-empty-result-inner">
                        <p>Loading...</p>
                    </div>
                </div>
            );
        }
        return renderedPokemons ? currentPokemons : emptyList();
    }

    return (
        <div>
            <Navbar/>
            <h2 className="view-pokemons-header">All Pokemon</h2>
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

export default ViewPokemon;