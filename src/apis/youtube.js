import axios from 'axios'

const KEY = 'AIzaSyBv8iglbJKVDyM4UnLr1R8y_6zNLMUYXrY';

export default axios.create({
    baseURL: ' https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});