import React from 'react';
import './style.css';

const PokemonCard = (props) => {

    /* Changes font color based on the pokemon type */
    const getColor = (type) => {
        switch(type) {
            case null:
                return {};
            case "Normal":
                return {color: ""};
            case "Fire":
                return {color: "#ff00ff"};
            case "Water":
                return {color: "#0000ff"};
            case "Grass":
                return {color: "#00ff00"};
            case "Electric":
                return {color: "#ffff00"};
            case "Psychic":
                return {color: "#ff00ff"};
            case "Ice":
                return {color: "#99ccff"};
            case "Dragon":
                return {color: "#ff9933"};
            case "Dark":
                return {color: "#cc0099"};
            case "Fairy":
                return {color: "#ff99cc"};
            case "Fighting":
                return {color: "#cc3300"};
            case "Flying":
                return {color: "#66ccff"};
            case "Poison":
                return {color: "#cc99ff"};
            case "Ground":
                return {color: " #cc7400"};
            case "Rock":
                return {color: " #666699"};
            case "Bug":
                return {color: " #339933"};
            case "Ghost":
                return {color: " #cccccc"};
            case "Steel":
                return {color: " #999999"};
            default:
                return {};
        }
    }

    return(
        <div className="pokemon-card-container">
            <img className="pokemon-photo" src={props.image} />
            <p className="pokemon-name"> {props.name}</p>
            <p className="pokemon-description">{props.description}</p>
            <p className="pokemon-types">
                <span className="pokemon-type-1" style={getColor(props.type1)}>{props.type1}</span> {'\u00A0'}
                <span className="pokemon-type-2" style={getColor(props.type2)}>{props.type2}</span>
            </p>
        </div>
    );
}

export default PokemonCard;