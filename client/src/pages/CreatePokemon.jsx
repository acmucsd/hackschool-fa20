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
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default CreatePokemon;