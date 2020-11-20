import React, { useRef, useEffect } from 'react';
import Move from '../Move';
import CanvasDraw from 'react-canvas-draw';
import './style.css';

const PokemonCard = (props) => {

    const loadableCanvas = useRef();

    const displayedMoves = props.moves.map((move, key) => {
        return <Move key={key} name={move.name} type={move.type} power={move.power} />
    });

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
                    <p className="pokemoncard-name">{props.name}</p>
                    <p className="pokemoncard-description">{props.description}</p>
                    <p className="pokemoncard-types">
                        <span className="pokemon-type-1" style={{ color: "#000000" }}>{props.type1}</span>
                        <span className="pokemon-type-2" style={{ color: "#000000" }}>{props.type2}</span>
                    </p>
                    <p>Moves: </p>
                    <table className="moves-table">
                        <tbody>
                            {displayedMoves}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};

export default PokemonCard;