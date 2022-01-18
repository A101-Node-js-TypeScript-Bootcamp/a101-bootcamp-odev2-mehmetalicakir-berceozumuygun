const axios = require('axios');
const url = require('url')

exports.getAllBrands = async () => {
    const response = await axios.get('https://api.trendyol.com/sapigw/brands'); //Axios modülü ile API'ye bağlantı sağlıyoruz.
    return response.data;
}

exports.getBrand = async (req,res) => {
    const name = encodeURI(`https://api.trendyol.com/sapigw/brands/by-name?name=${req}`);
    const response = await axios.get(name); //Axios modülü ile API'ye bağlantı sağlıyoruz.
    return response.data;
}