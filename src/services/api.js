import axios from 'axios';

const apiUrl = 'http://localhost:8081';

export const get = (resource) => axios.get(apiUrl + resource);
export const post = (resource, values) => {
    axios({
        method: 'post',
        url: apiUrl + resource,
        data: values
    });
}