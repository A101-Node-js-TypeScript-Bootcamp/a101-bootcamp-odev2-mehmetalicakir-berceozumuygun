const axios = require('axios');
const url = require('url')


//Get All Brand
exports.getAllBrands = async () => {
    const response = await axios.get('https://api.trendyol.com/sapigw/brands'); //Axios modülü ile API'ye bağlantı sağlıyoruz.
    return response.data;
}

//Get Single Brand by name
exports.getBrand = async (req,res) => {
    const name = encodeURI(`https://api.trendyol.com/sapigw/brands/by-name?name=${req}`);
    const response = await axios.get(name); //Axios modülü ile API'ye bağlantı sağlıyoruz.
    return response.data;
}

//Get All Categories 
exports.getAllCategories = async () => {
    const response = await axios.get('https://api.trendyol.com/sapigw/product-categories'); //Axios modülü ile API'ye bağlantı sağlıyoruz.
    return response.data;
}

//Get Single Category by id
exports.getCategory = async (req,res) => {
    const id = encodeURI(`https://api.trendyol.com/sapigw/product-categories/${req}/attributes`); 
    const response = await axios.get(id); //Axios modülü ile API'ye bağlantı sağlıyoruz.
    return response.data;
}