const mongoose = require('mongoose');
const MoveSchema = require('./move');

const PokemonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      required: true,
    },
    type1: {
      type: String,
      required: true,
    },
    type2: {
      type: String,
      required: false,
    },
    moves: {
      type: [MoveSchema],
      required: true,
    },
  }
);

const Pokemon = mongoose.model('Pokemon', PokemonSchema);

module.exports = Pokemon;

