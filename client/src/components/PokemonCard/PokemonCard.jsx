import React from 'react';
import Move from '../Move/Move';
import './style.css';

const PokemonCard = (props) => {

    /* Changes font color based on the pokemon type */
    const getStyle = (type) => {
        switch (type) {
            case null:
                return {};
            case "normal":
                return { color: "" };
            case "fire":
                return { color: "#ff00ff" };
            case "water":
                return { color: "#0000ff" };
            case "grass":
                return { color: "#00ff00" };
            case "electric":
                return { color: "#ffff00" };
            case "psychic":
                return { color: "#ff00ff" };
            case "ice":
                return { color: "#99ccff" };
            case "dragon":
                return { color: "#ff9933" };
            case "dark":
                return { color: "#cc0099" };
            case "fairy":
                return { color: "#ff99cc" };
            case "fighting":
                return { color: "#cc3300" };
            case "flying":
                return { color: "#66ccff" };
            case "poison":
                return { color: "#cc99ff" };
            case "ground":
                return { color: " #cc7400" };
            case "rock":
                return { color: " #666699" };
            case "bug":
                return { color: " #339933" };
            case "ghost":
                return { color: " #cccccc" };
            case "steel":
                return { color: " #999999" };
            default:
                return {};
        }
    }

    let pokemonMoves = props.moves.map((move) => {
        return <Move name={move.name} type={move.type} power={move.power} />
    })

    const noMoves = () => {
        return <tr>This Pokemon has no moves :(</tr>;
    }

    let movesSection = () => {
        return props.moves.length === 0 ? noMoves() : pokemonMoves;
    }

    return (
        <div className="pokemon-card-container">
            <div className="pokemon-card-container-inner">
                <img className="pokemon-photo" src={props.image} alt="Oh no! Pokemon photo failed to load :(" />
                <div>
                    <p className="pokemoncard-name"> {props.name}</p>
                    <p className="pokemon-description">{props.description}</p>
                    <p className="pokemon-types">
                        <span className="pokemon-type-1" style={getStyle(props.type1)}>{props.type1}</span> {'\u00A0'}
                        <span className="pokemon-type-2" style={getStyle(props.type2)}>{props.type2}</span>
                    </p>
                    <p className="pokemoncard-bold">Moves: </p>
                    <table className="moves-table">
                        {movesSection()}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;