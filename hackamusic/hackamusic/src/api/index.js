import config from './config.js'
const axios = require('axios').default;

const apiKey = config.apiKey
const BASE_URL = 'https://ws.audioscrobbler.com/';
const URL_GEO = `2.0/?method=geo.gettopartists&country=spain&api_key=${apiKey}&format=json`;
const URL_TOP_TRACKS = `/2.0/?method=geo.gettoptracks&country=spain&api_key=${apiKey}&format=json`;
const URL_TOP_TAGS = `/2.0/?method=chart.gettoptags&api_key=${apiKey}&format=json`;

//First Function : GET_ARTIST
async function getArtists(){
    try{
        const response = await axios.get(`${BASE_URL}${URL_GEO}`);
        console.log(response);
        return response;
    }catch(error){
        console.error(error);
    }
}

//Second Function : GET_TOP_TRACKS
async function getTopTracks(){
    try{
        const response = await axios.get(`${BASE_URL}${URL_TOP_TRACKS}`);
        console.log('Esta es la respuesta de los Top Tracks');
        console.log(response);
        return response;
    }catch(error){
        console.error(error);
    }
}


// Third Function : GET_TOP_TAGS
async function getTopTags() {
    try {
        const response = await axios.get(`${BASE_URL}${URL_TOP_TAGS}`);
        console.log('Consiguiendo los Top Tags');
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export default {
    getArtists,
    getTopTracks,
    getTopTags,
}

