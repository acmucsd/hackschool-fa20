const express = require('express');
const PokemonService = require('../services/pokemon');

const router = express.Router();

router.get('/pokemon', async (req, res) => {
  const pokemon = await PokemonService.findAll();
  res.status(200).json({ pokemon });
})

router.get('/pokemon/:id', async (req, res) => {
  const pokemon = await PokemonService.findById(req.params.id);
  res.status(200).json({ pokemon });
})

router.get('/pokemonName', async (req, res) => {
  const pokemonName = await PokemonService.generateName();
  res.status(200).json({ pokemonName });
})

router.post('/pokemon', async (req, res) => {
  const { name, description, type1, type2, image, moves } = req.body;
  const newPokemon = { name, description, image, type1, type2, moves };
  const pokemon = await PokemonService.createPokemon(newPokemon);
  res.status(200).json({ pokemon });
})

module.exports = router;
