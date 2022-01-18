const express = require("express");
let platform = express.Router();
let trendyolEndPoint = require("./trendyol/trendyol"); //Trendyol routerlarının bulunduğu dosya
platform.use('/trendyol', trendyolEndPoint); // /api/platforms/trendyol

module.exports = platform;