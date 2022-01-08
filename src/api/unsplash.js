import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID tJj1z8F3bmwKQbYS6xb6fmP2wlMiRuPOK8lp47DO1CI'
    }
});
