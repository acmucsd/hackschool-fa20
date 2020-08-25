import React from 'react';
import './style.css';

const Move = (props) => {

    /* Color object to display different colors for each type */
    const colors = {
        Normal: "#ffffcc",
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

    /* Changes background color based on the pokemon type 
     Pyschic, Dark, and Fighting types have white fonts for display reasons */
    const getStyle = (type) => {
        if(type === null){return {};}
        if(type === 'Psychic' || type === 'Dark' || type === 'Fighting'){
            return {backgroundColor: colors[type], color: "white"};
        }
        return {backgroundColor:colors[type]};
    }

    return(
        <tbody>
            <tr className="pokemon-move">
                <td><span className="move-type" style={getStyle(props.type)}>{props.type}</span></td>
                <td><strong>{props.name}</strong></td>
                <td>Power: {props.power}</td>
            </tr>
        </tbody>
    );
}

export default Move;