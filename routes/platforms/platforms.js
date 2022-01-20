const express = require("express");
let platform = express.Router();
let trendyolEndPoint = require("./trendyol/trendyol");  //Trendyol routerlarının bulunduğu dosya
let githubEndPoint = require('./github/github')         //Github routerlarının bulunduğu dosya
let openseaEndPoint = require('./opensea/opensea')      //Open Sea routerlarının bulunduğu dosya

platform.use('/trendyol', trendyolEndPoint);            // /api/platforms/trendyol
platform.use('/github', githubEndPoint);                // /api/platforms/github
platform.use('/opensea',openseaEndPoint);               // /api/platforms/opensea

module.exports = platform;