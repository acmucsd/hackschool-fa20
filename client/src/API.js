import axios from 'axios';

const server = 'https://pokemon-generator-pogchamp.herokuapp.com/';

const API = {
    getPokemon: function () {
        return axios.get(`${server}/api/pokemon`);
    },
    createPokemon: function (pokemon) {
        return axios.post(`${server}/api/pokemon`, pokemon);
    }
}

export default API;
