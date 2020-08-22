const mongoose = require('mongoose');

const MoveSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    power: {
      type: Number,
      required: true,
    },
  }
);

module.exports = MoveSchema;
