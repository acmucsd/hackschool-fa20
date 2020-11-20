import axios from 'axios';

const server = 'http://localhost:5000'

const API = {
    getPokemon: function () {
        return axios.get(`${server}/api/pokemon`);
    },
    createPokemon: function (pokemon) {
        return axios.post(`${server}/api/pokemon`, pokemon);
    }
}

export default API;
