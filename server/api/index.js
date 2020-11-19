const express = require('express');
const Pokemon = require('../models/pokemon');

const router = express.Router();

router.get('/pokemon', async (req, res) => {
    const pokemon = await Pokemon.find().exec();

    res.status(200).json({ pokemon });
});

router.post('/pokemon', async (req, res) => {
    const { pokemon } = req.body;
    console.log("req.body: " + JSON.stringify(req.body));
    console.log("pokemon: " + pokemon);
    const { name, description, type1, type2, image, moves } = pokemon
    console.log(name);
    if ((!name || !description || !type1 || !image || !moves) || moves.length > 4) {
        res.status(400).json({ error: 'Invalid input' });
    } else {
        const newPokemon = await Pokemon.create(pokemon);
        res.status(200).json({ pokemon: newPokemon });
    }
});

module.exports = router;