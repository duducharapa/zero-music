const axios = require('axios');

const api = axios.create({
    baseURL: 'https://zero-music-api.herokuapp.com',
    headers: {
        "Acess-Control-Allow-Origin": "*"
    }
});

export default api;