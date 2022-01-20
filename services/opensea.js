const axios = require('axios');
const url = require('url');

//GET All Collections:
exports.getAllCollections = async() => {
    const response = await axios.get('https://api.opensea.io/api/v1/collections');    
    return response.data;
}
//GET Single Collection:
exports.getSingleCollection= async(req,res) => {
    const singleCollection= encodeURI(`https://api.opensea.io/api/v1/collection/${req}`);
    const response = await axios.get(singleCollection); 
    return response.data;
}