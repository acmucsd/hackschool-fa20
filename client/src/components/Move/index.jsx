import React from 'react';
import './style.css';

const Move = (props) => {
    return (
        <tr>
            <td>{props.type}</td>
            <td><strong>{props.name}</strong></td>
            <td>Power: {props.power}</td>
        </tr>
    )
};

export default Move;