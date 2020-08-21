const Pokemon = require('../models/pokemon');
const config = require('../config');
const axios = require('axios');

/**
 * Returns all pokemon in the database
 */
async function findAll() {
  return await Pokemon.find().exec();
}

/**
 * Queries the database for a specific pokemon based on the given id
 * @param {id} id 
 */
async function findById(id) {
  return await Pokemon.findById(id).exec();
}

/**
 * Generates a random name for the pokemon
 */
async function generateName() {
  const response = await axios.get(config.rng_url);
  return response.data[0];
}

/**
 * Adds a pokemon to the database
 * @param {Pokemon} pokemon 
 */
async function createPokemon(pokemon) {
  return Pokemon.create(pokemon);
}

module.exports = {
  findAll,
  findById,
  generateName,
  createPokemon
};
