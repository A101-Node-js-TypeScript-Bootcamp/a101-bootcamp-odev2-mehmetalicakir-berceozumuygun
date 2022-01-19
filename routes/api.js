const express = require("express");
let platform = express.Router();
let platformEndPoint = require("./platforms/platforms"); //Tüm e-ticaret platformlarının bulunduğu dosya
let userEndPoint = require('./user')
platform.use('/platforms', platformEndPoint); // /api/platforms/
platform.use('/user',userEndPoint);

module.exports = platform;
