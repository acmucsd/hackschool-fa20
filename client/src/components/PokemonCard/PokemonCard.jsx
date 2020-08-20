import React from 'react';
import Move from '../Move/Move';
import './style.css';
import CanvasDraw from 'react-canvas-draw';

const PokemonCard = (props) => {

    /* Changes font color based on the pokemon type */
    const getStyle = (type) => {
        switch (type) {
            case null:
                return {};
            case "Normal":
                return { color: "" };
            case "Fire":
                return { color: "#ff00ff" };
            case "Water":
                return { color: "#0000ff" };
            case "Grass":
                return { color: "#00ff00" };
            case "Electric":
                return { color: "#ffff00" };
            case "Psychic":
                return { color: "#ff00ff" };
            case "Ice":
                return { color: "#99ccff" };
            case "Dragon":
                return { color: "#ff9933" };
            case "Dark":
                return { color: "#cc0099" };
            case "Fairy":
                return { color: "#ff99cc" };
            case "Fighting":
                return { color: "#cc3300" };
            case "Flying":
                return { color: "#66ccff" };
            case "Poison":
                return { color: "#cc99ff" };
            case "Ground":
                return { color: " #cc7400" };
            case "Rock":
                return { color: " #666699" };
            case "Bug":
                return { color: " #339933" };
            case "Ghost":
                return { color: " #cccccc" };
            case "Steel":
                return { color: " #999999" };
            default:
                return {};
        }
    }

    /* Capitalizes the first letter of the type, might remove later */
    const capitalize = (str) => {
        if(str === ""){return "";}
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    /* Displays all moves by the pokemon */
    let pokemonMoves = props.moves.map((move) => {
        return <Move name={move.name} type={capitalize(move.type)} power={move.power} />
    })

    /* Indicate that the current pokemon doesn't have a move */
    const noMoves = () => {
        return <tr>This Pokemon has no moves :(</tr>;
    }

    /* Displays pokemonMoves or noMoves, depending on whether the pokemon's moves are empty */
    let movesSection = () => {
        return props.moves.length === 0 ? noMoves() : pokemonMoves;
    }

    return (
        <div className="pokemon-card-container">
            <div className="pokemon-card-container-inner">
                <CanvasDraw className="pokemon-photo"
                 disabled
                 hideGrid
                 saveData={props.image}
                />
                <div>
                    <p className="pokemoncard-name"> {props.name}</p>
                    <p className="pokemon-description">{props.description}</p>
                    <p className="pokemon-types">
                        <span className="pokemon-type-1" style={getStyle(capitalize(props.type1))}>{capitalize(props.type1)}</span> {'\u00A0'}
                        <span className="pokemon-type-2" style={getStyle(capitalize(props.type2))}>{capitalize(props.type2)}</span>
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