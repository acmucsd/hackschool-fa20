const Pokemon = require('../models/pokemon');

async function findAll() {
  return Pokemon.find();
}

module.exports = {
  findAll,
}