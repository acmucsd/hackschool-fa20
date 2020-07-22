const express = require('express');
const PokemonService = require('../services/pokemon');
const multer = require('multer');

const router = express.Router();

const upload = multer({ dest: './server/uploads/'});

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

router.post('/pokemon', upload.single('image'), async (req, res) => {
  const image = req.file;
  const { name, description, type1, type2, moves } = req.body;
  const pokemon = { name, description, image, type1, type2, moves };
  const newPokemon = await PokemonService.createPokemon(pokemon);
  res.status(200).json({ newPokemon });
})

module.exports = router;
