const trendyolServices = require("../services/trendyol");


//Get All Brands
exports.getAllBrands = async (req, res) => {
  const response = await trendyolServices.getAllBrands(); // API bağlantısının çekilmesini bekliyoruz
  res.send({
    status: true,
    data: response.brands // API içerisinde "brands" isimli bir dizide bulunduğu için orayı seçiyoruz
  });
};

//Get Brand by Name
exports.getBrand = async (req, res) => {
  const response = await trendyolServices.getBrand(req.params.name); // Url'den gelen name parametresini request olarak gönderiyoruz.
  res.send({
    status: true,
    data: response 
  });
};

//ALL Categories:
exports.getAllCategories = async (req, res) => {
  const response = await trendyolServices.getAllCategories(); // API bağlantısının çekilmesini bekliyoruz
  res.send({
    status: true,
    data: response.categories 
  });
};

//Single Category:
exports.getCategory = async (req, res) => {
  const response = await trendyolServices.getCategory(req.params.id); // Url'den gelen id parametresini request olarak gönderiyoruz.
      res.send({
        status: true,
        data: response 
      });
};