const Pokemon = require('../models/pokemon');

async function findAll() {
  return Pokemon.find();
}

async function findById(id) {
  return Pokemon.findById(id);
}

module.exports = {
  findAll, findById
}