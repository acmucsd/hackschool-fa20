const express = require('express');
const config = require('./server/config');
const mongoose = require('mongoose');
const cors = require('cors');
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());

server.use('/api', require('./server/api'));

mongoose.connect(config.database_url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB database');
});

const app = server.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});

module.exports = app;