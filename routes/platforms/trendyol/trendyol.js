const express = require("express");
let platform = express.Router();
let trendyolController = require('../../../controllers/trendyol') //Trendyol controllerı
console.log("Trendyol.js e geldi");
platform.get('/',trendyolController.getAllBrands)  //api/trendyol/

module.exports = platform;