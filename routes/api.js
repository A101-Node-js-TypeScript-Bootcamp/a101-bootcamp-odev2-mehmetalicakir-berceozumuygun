const express = require("express");
let platform = express.Router();
let platformEndPoint = require("./platforms/platforms"); //Tüm e-ticaret platformlarının bulunduğu dosya
console.log("Api.js e geldi");
platform.use('/api', platformEndPoint);

module.exports = platform;
