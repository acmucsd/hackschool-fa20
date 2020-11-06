const express = require('express');
const config = require('./config');
const cors = require('cors');
const router = require('./api');
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/api', router);

server.listen(config.PORT, () => {
    console.log('Server started on port ' + config.PORT);
});
