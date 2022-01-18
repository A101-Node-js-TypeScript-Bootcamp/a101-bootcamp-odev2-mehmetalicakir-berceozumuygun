const express = require("express");
let platform = express.Router();
let trendyolEndPoint = require("./trendyol/trendyol"); //Trendyol routerlarının bulunduğu dosya
console.log("Platform.js e geldi");
platform.use('/trendyol', trendyolEndPoint);

module.exports = platform;