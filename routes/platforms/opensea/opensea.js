const express = require("express");
let platform = express.Router();
let openseaController = require('../../../controllers/opensea')

platform.get('/getAllCollections',openseaController.getAllCollections) //api/platforms/opensea/getAllCollections
platform.get('/getSingleCollection/:name',openseaController.getSingleCollection) //api/platforms/opensea/getSingleCollection/name

module.exports = platform