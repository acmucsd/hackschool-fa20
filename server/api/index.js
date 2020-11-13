const express = require('express');
const Pokemon = require('../models/pokemon');

const router = express.Router();

router.get('/pokemon', async (req, res) => {
    const pokemon = await Pokemon.find().exec();

    res.status(200).json({ pokemon });
});

router.post('/pokemon', async (req, res) => {
    const { name, description, type1, type2, image, moves } = req.body;
    if ((!name || !description || !type1 || !image || !moves) || moves.length > 4) {
        res.status(400).json({ error: 'Invalid input' });
    } else {
        const newPokemon = { name, description, type1, type2, image, moves};
        const pokemon = await Pokemon.create(newPokemon);
        res.status(200).json({ pokemon });
    }
});

module.exports = router;
