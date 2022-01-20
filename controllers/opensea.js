const openseaServices = require("../services/opensea");

//GET All Collections:
exports.getAllCollections = async (req, res) => {
    const response = await openseaServices.getAllCollections(); // API bağlantısının çekilmesini bekliyoruz
    res.send({
      status: true,
      data: response.collections
    });
  };
//GET Single Collection:
exports.getSingleCollection = async (req, res) => {
    const response = await openseaServices.getSingleCollection(req.params.name); // API bağlantısının çekilmesini bekliyoruz
    res.send({
      status: true,
      data: response.collection
    });
  };
