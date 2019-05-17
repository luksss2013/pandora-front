import axios from 'axios';

const apiUrl = 'http://localhost:8081';

export const get = (resource) => axios.get(apiUrl + resource)