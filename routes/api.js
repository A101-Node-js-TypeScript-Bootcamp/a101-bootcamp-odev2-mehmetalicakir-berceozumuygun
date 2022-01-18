const express = require("express");
let platform = express.Router();
let platformEndPoint = require("./platforms/platforms"); //Tüm e-ticaret platformlarının bulunduğu dosya
platform.use('/platforms', platformEndPoint); // /api/platforms/

module.exports = platform;
