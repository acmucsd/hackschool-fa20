import React, { useEffect, useRef } from 'react';
import Move from '../Move/Move';
import './style.css';
import CanvasDraw from 'react-canvas-draw';

const PokemonCard = (props) => {

    const loadableCanvas = useRef();

    /* Color object to display different colors for each type */
    const colors = {
        Normal: "#555555",
        Fire: "#ff00ff",
        Water: "#0000ff",
        Grass: "#00ff00",
        Electric: "#ffff00",
        Psychic: "#ff00ff",
        Ice: "#99ccff",
        Dragon: "#ff9933",
        Dark: "#cc0099",
        Fairy: "#ff99cc",
        Fighting: "#cc3300",
        Flying: "#66ccff",
        Posion: "#cc99ff",
        Ground: "#cc7400",
        Rock: "666699",
        Bug: "#339933",
        Ghost: "#cccccc",
        Steel: "#999999"
    };

    /* Changes font color based on the pokemon type */
    const getStyle = (type) => {
        if (type == null) { return {}; }
        return { color: colors[type] };
    }

    /* Displays all moves by the pokemon */
    let pokemonMoves = props.moves.map((move, i) => {
        return <Move key={i} name={move.name} type={move.type} power={move.power} />
    })

    /* Indicate that the current pokemon doesn't have a move */
    const noMoves = () => {
        return <tbody><tr>This Pokemon has no moves :(</tr></tbody>;
    }

    /* Displays pokemonMoves or noMoves, depending on whether the pokemon's moves are empty */
    let movesSection = () => {
        return props.moves.length === 0 ? noMoves() : pokemonMoves;
    }

    useEffect(() => {
        if (loadableCanvas == null) { return; }
        loadableCanvas.current.loadSaveData(props.image, true);
    }, [props.image]);

    return (
        <div className="pokemon-card-container">
            <div className="pokemon-card-container-inner">
                <CanvasDraw
                    disabled
                    hideGrid
                    ref={loadableCanvas}
                    saveData={props.image}
                    canvasWidth={350}
                    canvasHeight={350}
                />
                <div className="pokemoncard-data-container">
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