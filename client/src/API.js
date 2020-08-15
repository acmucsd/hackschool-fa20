import axios from 'axios';

export default {
    getPokemonName: function () {
        return axios.get('https://hackschool-fa20-test-server.herokuapp.com/api/pokemonName');
    },

    createPokemon: function (payload) {
        const config = {
            method: 'post',
            url: '/api/pokemon',
            data: {
                name: payload.name,
                description: payload.desc,
                image: payload.image,
                type1: payload.type1,
                type2: payload.type2,
                moves: payload.moves
            }
        };
        return axios(config);
    }
}
