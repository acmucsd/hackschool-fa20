const mongoose = require('mongoose');

const pokemonSchema = mongoose.Schema(
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
      type: Buffer,
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
    userId: {
      type: Number,
      required: false,
    },
    moves: {
      type: [Move]
    }
  }
);

const moveSchema = mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    power: {
      type: Number,
      required: true,
    }
  }
)

const Pokemon = mongoose.model('Pokemon', pokemonSchema);
const Move = mongoose.model('Move', moveSchema);

module.exports = Pokemon;

