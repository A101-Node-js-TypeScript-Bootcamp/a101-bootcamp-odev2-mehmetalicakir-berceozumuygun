const express = require("express");
let platform = express.Router();
let trendyolController = require('../../../controllers/trendyol') //Trendyol controllerı

platform.get('/getAllBrands',trendyolController.getAllBrands)  // /api/platforms/trendyol/getAllBrands Tüm markaları çekiyor.

module.exports = platform;