const express = require("express");
let platform = express.Router();
let trendyolController = require('../../../controllers/trendyol') //Trendyol controllerı

platform.get('/getAllBrands',trendyolController.getAllBrands)  // /api/platforms/trendyol/getAllBrands Tüm markaları çekiyor.
platform.get('/getBrand/:name',trendyolController.getBrand)    // /api/platforms/trendyol/getBrand/Marka ismi ile marka çekiyor.

module.exports = platform;