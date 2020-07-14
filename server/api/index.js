const express = require('express');
const PokemonService = require('../services/pokemon');

const router = express.Router();

router.get('/pokemon', async (req, res) => {
  const pokemon = await PokemonService.findAll();
  res.json({ pokemon })
})

router.get('/pokemon/:id', (req, res) => {
  res.send('GET /pokemon/:id reached');
})

router.get('/pokemon/user/:id', (req, res) => {
  res.send('GET /pokemon/user/:id reached');
})

router.get('/pokemonName', (req, res) => {
  res.send('GET /pokemonName reached');
})

router.post('/pokemon', (req, res) => {
  res.send('GET /pokemon/:id reached');
})

module.exports = router;
