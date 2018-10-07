import axios from 'axios';
import * as URL from './url';

export default function APICaller(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `${URL.API_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
};