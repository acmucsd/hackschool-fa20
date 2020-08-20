import React from 'react';
import './style.css';

const Move = (props) => {

    /* Changes font color based on the pokemon type */
    const getStyle = (type) => {
        switch(type) {
            case null:
                return {};
            case "normal":
                return {"background-color": "#ffffcc"};
            case "fire":
                return {"background-color": "#ff00ff"};
            case "water":
                return {"background-color": "#0000ff"};
            case "grass":
                return {"background-color": "#00ff00"};
            case "electric":
                return {"background-color": "#ffff00"};
            case "psychic":
                return {"background-color": "#ff00ff", color: "white"};
            case "ice":
                return {"background-color": "#99ccff"};
            case "dragon":
                return {"background-color": "#ff9933"};
            case "dark":
                return {"background-color": "#cc0099", color: "white"};
            case "fairy":
                return {"background-color": "#ff99cc"};
            case "fighting":
                return {"background-color": "#cc3300", color: "white"};
            case "flying":
                return {"background-color": "#66ccff"};
            case "poison":
                return {"background-color": "#cc99ff"};
            case "ground":
                return {"background-color": " #cc7400"};
            case "rock":
                return {"background-color": " #666699"};
            case "bug":
                return {"background-color": " #339933"};
            case "ghost":
                return {"background-color": " #cccccc"};
            case "steel":
                return {"background-color": " #999999"};
            default:
                return {};
        }
    }

    return(
        <tr className="pokemon-move">
            <td><span className="move-type" style={getStyle(props.type)}>{props.type}</span></td>
            <td><strong>{props.name}</strong></td>
            <td>Power: {props.power}</td>
        </tr>
    );
}

export default Move;