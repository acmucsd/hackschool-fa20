import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import API from '../API';
import './style.css';
import PokemonCard from '../components/PokemonCard';

/**
 * Component for the view pokemon page
 */
const ViewPokemon = () => {
    const [body, setBody] = useState([]);

    useEffect(() => {
        API.getPokemon().then((response) => {
            setBody(response.data.pokemon);
        });
    }, []);

    const currentPokemons = body.map((val) => <PokemonCard name={val.name} description={val.description} image={val.image}
        type1={val.type1} type2={val.type2} moves={val.moves} ></PokemonCard>);

    return (
        <div>
            <Navbar />
            <div className="pokemon">
                {currentPokemons}
            </div>
        </div>
    );
};

export default ViewPokemon;