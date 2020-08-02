import React, { useState } from 'react';
import './style.css';

import Navbar from '../components/Navbar';
import { Form, Button } from 'react-bootstrap';

const CreatePokemon = () => {
    const [name, setName] = useState();

    /**
     * Method to handle the creation of a Pokemon on form submit.
     */
    const handleCreatePokemon = () => {
        return;
    };

    /**
     * Method to generate a random Pokemon name.
     */
    const randName = () => {
        // use some API to generate random pokemon name
        setName("Henry");
    };

    return (
        <div>
            <Navbar />
            <div className="create-page">
                <div className="canvas">
                    <p>insert canvas component here</p>
                </div>
                <div className="pokemon-form">
                    <h2>Create a Pokemon</h2>
                    <Form>
                        <Form.Group controlId="formGroupName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={name} />
                            <Button onClick={randName}>Generate Random Name</Button>
                        </Form.Group>
                        <Form.Group controlId="formGroupDesc">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group controlId="formGroupType">
                            <Form.Label>Type(s)</Form.Label>
                            <Form.Control as="select">
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
                            </Form.Control>
                            <Form.Control as="select">
                                <option value=""></option>
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
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formMove1">
                            <Form.Label>Move 1</Form.Label>
                            <Form.Control type="text" />
                            <Form.Label>Type</Form.Label>
                            <Form.Control as="select">
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
                            </Form.Control>
                            <Form.Label>Power</Form.Label>
                            <Form.Control type="number" min="0" max="100" defaultValue="0" />
                        </Form.Group>
                        <Form.Group controlId="formMove2">
                            <Form.Label>Move 2</Form.Label>
                            <Form.Control type="text" />
                            <Form.Label>Type</Form.Label>
                            <Form.Control as="select">
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
                            </Form.Control>
                            <Form.Label>Power</Form.Label>
                            <Form.Control type="number" min="0" max="100" defaultValue="0" />
                        </Form.Group>
                        <Form.Group controlId="formMove3">
                            <Form.Label>Move 3</Form.Label>
                            <Form.Control type="text" />
                            <Form.Label>Type</Form.Label>
                            <Form.Control as="select">
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
                            </Form.Control>
                            <Form.Label>Power</Form.Label>
                            <Form.Control type="number" min="0" max="100" defaultValue="0" />
                        </Form.Group>
                        <Form.Group controlId="formMove4">
                            <Form.Label>Move 4</Form.Label>
                            <Form.Control type="text" />
                            <Form.Label>Type</Form.Label>
                            <Form.Control as="select">
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
                            </Form.Control>
                            <Form.Label>Power</Form.Label>
                            <Form.Control type="number" min="0" max="100" defaultValue="0" />
                        </Form.Group>
                        <Button type="submit">Create Pokemon</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default CreatePokemon;