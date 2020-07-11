const dotenv = require('dotenv');

dotenv.config();

const config = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};

module.exports = config;
