const dotenv = require('dotenv');

dotenv.config();

const config = {
    PORT: process.env.PORT,
}

module.exports = config;
