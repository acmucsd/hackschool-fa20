const Pokemon = require('../models/pokemon');
const config = require('../config');
const axios = require('axios');

async function findAll() {
  return await Pokemon.find().exec();
}

async function findById(id) {
  // TODO: Database call
}

async function generateName() {
  const response = await axios.get(config.rng_url);
  return response.data;
}

async function createPokemon(pokemon) {
  // TODO: Database call
}

module.exports = {
  findAll,
  findById,
  generateName,
  createPokemon
}