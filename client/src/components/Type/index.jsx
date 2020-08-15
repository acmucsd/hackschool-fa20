import React from 'react';
import './style.css';

const Type = ({ id }) => {
    let emptyOption;
    if (id === "type2") {
        emptyOption = <option value=""></option>;
    }

    return (
        <select id={id} name={id}>
            {emptyOption}
            <option>Normal</option>
            <option>Fire</option>
            <option>Water</option>
            <option>Grass</option>
            <option>Electric</option>
            <option>Psychic</option>
            <option>Ice</option>
            <option>Dragon</option>
            <option>Dark</option>
            <option>Fairy</option>
            <option>Fighting</option>
            <option>Flying</option>
            <option>Poison</option>
            <option>Ground</option>
            <option>Rock</option>
            <option>Bug</option>
            <option>Ghost</option>
            <option>Steel</option>
        </select>
    );
};

export default Type;
