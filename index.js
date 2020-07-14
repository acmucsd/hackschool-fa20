const express = require('express');
const config = require('./src/config');
const mongoose = require('mongoose');
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use('/api', require('./src/api'));

mongoose.connect(config.database_url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB database');
  server.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`);
  });
});
