import axios from 'axios';

const KEY = 'AIzaSyDE6kEHpJeHbn7D2tQWbOIg6DBHQ3QQ-dA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});
