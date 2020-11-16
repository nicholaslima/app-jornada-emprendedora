

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://startnowmegahack.herokuapp.com/'
});

export default api;