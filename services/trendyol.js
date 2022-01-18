const axios = require('axios');

exports.getAllBrands = async () => {
    const response = await axios.get('https://api.trendyol.com/sapigw/brands'); //Axios modülü ile API'ye bağlantı sağlıyoruz.
    return response.data;
}