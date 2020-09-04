import React, { useState, useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';
import  { useHistory } from 'react-router-dom';

import './style.css';
import API from '../API';
import Navbar from '../components/Navbar';
import Type from '../components/Type';

const CreatePokemon = () => {
    let history = useHistory();
    const [name, setName] = useState('');
    const [color, setColor] = useState('#000');
    const canvasInput = useRef();

    /**
     * Method to handle the creation of a Pokemon on form submit.
     */
    const handleCreatePokemon = async (e) => {
        e.preventDefault();
        const req = e.target;
        const payload = {
            name: req.name.value,
            desc: req.desc.value,
            image: canvasInput.current.getSaveData(),
            type1: req.type1.value,
            type2: req.type2.value,
            moves: [
                {
                    name: req.move1.value,
                    type: req.move1type.value,
                    power: req.move1power.value
                },
                {
                    name: req.move2.value,
                    type: req.move2type.value,
                    power: req.move2power.value
                },
                {
                    name: req.move3.value,
                    type: req.move3type.value,
                    power: req.move3power.value
                },
                {
                    name: req.move4.value,
                    type: req.move4type.value,
                    power: req.move4power.value
                }
            ]
        };
        await API.createPokemon(payload);
        history.push("/view");
    };

    /**
     * Method to generate a random Pokemon name.
     */
    const randName = async () => {
        // use some API to generate random pokemon name
        const randName = await API.getPokemonName();
        setName(randName.data);
    };

    return (
        <div>
            <Navbar />
            <form onSubmit={handleCreatePokemon} className="create-page">
                <div className="drawing">
                    <h2>Draw your Pokemon here!</h2>
                    <div className="canvas">
                        <CanvasDraw hideGrid={true}
                            hideInterface={true}
                            brushColor={color}
                            brushRadius={5}
                            lazyRadius={0}
                            ref={canvasInput}
                            canvasWidth={500}
                            canvasHeight={500}
                        />
                    </div>
                    <div className="canvas-options">
                        <div className="color-picker">
                            <label htmlFor="select-color">Color</label>
                            <input type="color" id="select-color" value={color} onChange={(e) => setColor(e.target.value)}></input>
                        </div>
                        <button onClick={(e) => {
                            e.preventDefault();
                            canvasInput.current.clear();
                        }}>Clear</button>
                        <button onClick={(e) => {
                            e.preventDefault();
                            canvasInput.current.undo();
                        }}>Undo</button>
                    </div>
                </div>
                <div className="pokemon-form">
                    <h2>Create a Pokemon</h2>
                    <div className="name-row">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" defaultValue={name} required></input>
                        <button type="button" onClick={(e) => {
                            e.preventDefault();
                            randName();
                        }}>Generate Random Name</button>
                    </div>
                    <div className="desc-row">
                        <label htmlFor="desc">Description</label>
                        <input type="text" id="desc" name="desc" required></input>
                    </div>
                    <div className="type-row">
                        <label htmlFor="type1">Type 1</label>
                        <Type id={'type1'} />
                        <label htmlFor="type2">Type 2</label>
                        <Type id={'type2'} />
                    </div>
                    <div className="move-row">
                        <label htmlFor="move1">Move 1</label>
                        <input type="text" id="move1" name="move1" required></input>
                        <label htmlFor="move1type">Type</label>
                        <Type id={'move1type'} />
                        <label htmlFor="move1power">Power</label>
                        <input type="number" id="move1power" name="move1power" min="0" max="100" defaultValue="0"></input>
                    </div>
                    <div className="move-row">
                        <label htmlFor="move2">Move 2</label>
                        <input type="text" id="move2" name="move2"></input>
                        <label htmlFor="move2type">Type</label>
                        <Type id={'move2type'} />
                        <label htmlFor="move2power">Power</label>
                        <input type="number" id="move2power" name="move2power" min="0" max="100" defaultValue="0"></input>
                    </div>
                    <div className="move-row">
                        <label htmlFor="move3">Move 3</label>
                        <input type="text" id="move3" name="move3"></input>
                        <label htmlFor="move3type">Type</label>
                        <Type id={'move3type'} />
                        <label htmlFor="move3power">Power</label>
                        <input type="number" id="move3power" name="move3power" min="0" max="100" defaultValue="0"></input>
                    </div>
                    <div className="move-row">
                        <label htmlFor="move4">Move 4</label>
                        <input type="text" id="move4" name="move4"></input>
                        <label htmlFor="move4type">Type</label>
                        <Type id={'move4type'} />
                        <label htmlFor="move4power">Power</label>
                        <input type="number" id="move4power" name="move4power" min="0" max="100" defaultValue="0"></input>
                    </div>
                    <input type="submit" value="Submit"></input>
                </div>
            </form>
        </div>
    );
};

export default CreatePokemon;
