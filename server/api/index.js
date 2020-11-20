const express = require('express');
const Pokemon = require('../models/pokemon');

const router = express.Router();

router.get('/pokemon', async (req, res) => {
    const pokemon = await Pokemon.find().exec();

    res.status(200).json({ pokemon });
});

router.post('/pokemon', async (req, res) => {
    const { pokemon } = req.body;
    const { name, description, image, type1, type2, moves } = pokemon;
    const hasMissingFields =  !name ||  !description ||  !type1 || !image ||  !moves;
    const hasMoreThanFourMoves = moves && moves.length > 4;
    if (hasMissingFields || hasMoreThanFourMoves) {
        res.status(400).json({ error: 'Invalid input' });
    }
    const newPokemon = await Pokemon.create(pokemon);
    res.status(200).json({ pokemon: newPokemon });
});

module.exports = router;
