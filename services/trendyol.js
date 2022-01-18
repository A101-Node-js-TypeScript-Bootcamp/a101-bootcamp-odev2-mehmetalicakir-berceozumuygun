const axios = require('axios');

exports.getAllBrands = async () => {
    console.log("Services e geldi");
    let response = await axios.get('https://api.trendyol.com/sapigw/brands');
    return response.data;
}