const express = require('express');
const router = express.Router();

const axios = require('axios');

// const apiKey = process.env.GIPHY_API_KEY;
const apiKey = 'Jq4es5Wn9HOx3oIXG9RrWootM1W5RJOT';
console.log('key is', apiKey);

//add router get
router.get('/:searchGif', (request, response)=>{
let searchGif = request.params.searchGif;
let url = `https://api.giphy.com/v1/gifs/random?&api_key=${apikey}`;
//1st http request/response, 2nd http is req/res
axios.get('url')
    .then(res => {
        response.send(res.data);
    })
    .catch(error=>{
        console.log('Error on Giphy request', error);
        
    })
});

module.exports = router;