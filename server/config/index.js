const dotenv = require('dotenv');

dotenv.config();

const config = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  rng_url: process.env.RNG_URL,
};

module.exports = config;
