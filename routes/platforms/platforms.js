const express = require("express");
let platform = express.Router();
let trendyolEndPoint = require("./trendyol/trendyol");  //Trendyol routerlarının bulunduğu dosya
let githubEndPoint = require('./github/github')         //Github routerlarının bulunduğu dosya
let openseaEndPoint = require('./opensea/opensea')      //OpenSea routerlarının bulunduğu dosya
let newsEndPoint = require('./news/news')

platform.use('/trendyol', trendyolEndPoint);            // /api/platforms/trendyol
platform.use('/github', githubEndPoint);                // /api/platforms/github
platform.use('/opensea',openseaEndPoint);               // /api/platforms/opensea
platform.use('/news',newsEndPoint);

module.exports = platform;