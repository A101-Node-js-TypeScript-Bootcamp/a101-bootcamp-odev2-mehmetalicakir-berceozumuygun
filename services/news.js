const axios = require('axios');
const url = require('url')

//getSources
exports.getSources = async () => {
    const response = await axios.get('https://saurav.tech/NewsAPI/sources.json')                          
    return response.data;
}

//getNewsBySource
exports.getNewsBySource = async (req,res) => {
    const newsBySource = encodeURI(`https://saurav.tech/NewsAPI/everything/${req}.json`);
    const response = await axios.get(newsBySource)                          
    return response.data;
}

//getNewsFromUSA
exports.getNewsFromUSA = async (req,res) => {
    const newsBySource = encodeURI(`https://saurav.tech/NewsAPI/top-headlines/category/${req}/us.json`);
    const response = await axios.get(newsBySource)                          
    return response.data;
}

//getNewsFromGB
exports.getNewsFromGB = async (req,res) => {
    const newsBySource = encodeURI(`https://saurav.tech/NewsAPI/top-headlines/category/${req}/gb.json`);
    const response = await axios.get(newsBySource)                          
    return response.data;
}

//getNewsFromAustralia
exports.getNewsFromAustralia = async (req,res) => {
    const newsBySource = encodeURI(`https://saurav.tech/NewsAPI/top-headlines/category/${req}/au.json`);
    const response = await axios.get(newsBySource)                          
    return response.data;
}

//getNewsFromRussia
exports.getNewsFromRussia = async (req,res) => {
    const newsBySource = encodeURI(`https://saurav.tech/NewsAPI/top-headlines/category/${req}/ru.json`);
    const response = await axios.get(newsBySource)                          
    return response.data;
}

//getNewsFromIndia
exports.getNewsFromIndia = async (req,res) => {
    const newsBySource = encodeURI(`https://saurav.tech/NewsAPI/top-headlines/category/${req}/in.json`);
    const response = await axios.get(newsBySource)                          
    return response.data;
}

//getNewsFromFrance
exports.getNewsFromFrance = async (req,res) => {
    const newsBySource = encodeURI(`https://saurav.tech/NewsAPI/top-headlines/category/${req}/fr.json`);
    const response = await axios.get(newsBySource)                          
    return response.data;
}
