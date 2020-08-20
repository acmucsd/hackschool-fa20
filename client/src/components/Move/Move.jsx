import React from 'react';
import './style.css';

const Move = (props) => {

    /* Changes background color based on the pokemon type */
    const getStyle = (type) => {
        switch(type) {
            case null:
                return {};
            case "Normal":
                return {"background-color": "#ffffcc"};
            case "Fire":
                return {"background-color": "#ff00ff"};
            case "Water":
                return {"background-color": "#0000ff"};
            case "Grass":
                return {"background-color": "#00ff00"};
            case "Electric":
                return {"background-color": "#ffff00"};
            case "Psychic":
                return {"background-color": "#ff00ff", color: "white"};
            case "Ice":
                return {"background-color": "#99ccff"};
            case "Dragon":
                return {"background-color": "#ff9933"};
            case "Dark":
                return {"background-color": "#cc0099", color: "white"};
            case "Fairy":
                return {"background-color": "#ff99cc"};
            case "Fighting":
                return {"background-color": "#cc3300", color: "white"};
            case "Flying":
                return {"background-color": "#66ccff"};
            case "Poison":
                return {"background-color": "#cc99ff"};
            case "Ground":
                return {"background-color": " #cc7400"};
            case "Rock":
                return {"background-color": " #666699"};
            case "Bug":
                return {"background-color": " #339933"};
            case "Ghost":
                return {"background-color": " #cccccc"};
            case "Steel":
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