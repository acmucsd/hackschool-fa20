import React from 'react';
import './style.css'; 

const PokemonCard = (props) => {
    return (
        <div className="pokemon-card-container">
            <div className="pokemon-card-container-inner">
                <div className="pokemoncard-data-container">
                    <p className="pokemoncard-name">{props.name}</p>
                    <p className="pokemoncard-description">{props.description}</p>
                    <p className="pokemoncard-types">
                        <span className="pokemon-type-1" style={{color: "#000000"}}>{props.type1}</span>
                        <span className="pokemon-type-2" style={{color: "#000000"}}>{props.type2}</span>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default PokemonCard;