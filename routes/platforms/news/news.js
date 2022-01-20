const express = require("express");
let platform = express.Router();

let newsController = require('../../../controllers/news') //News controllerı

platform.get('/getSources',newsController.getSources);
platform.get('/getNewsBySource/:source',newsController.getNewsBySource);
platform.get('/getNewsFromUSA/:source',newsController.getNewsFromUSA);
platform.get('/getNewsFromGB/:source',newsController.getNewsFromGB);
platform.get('/getNewsFromAustralia/:source',newsController.getNewsFromAustralia);
platform.get('/getNewsFromRussia/:source',newsController.getNewsFromRussia);
platform.get('/getNewsFromIndia/:source',newsController.getNewsFromIndia);
platform.get('/getNewsFromFrance/:source',newsController.getNewsFromFrance);



module.exports = platform;