const mongoose = require('mongoose');

const pokemonSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    }
    // TODO: rest of fields
  }
);

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;

