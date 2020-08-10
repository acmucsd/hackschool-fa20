import axios from 'axios';

export default {
    getPokemonName: function () {
        const min = 4;
        const max = 11;
        return axios.get(`https://uzby.com/api.php?min=${min}&max=${max}`);
        // return axios.get('/api/pokemonName');
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