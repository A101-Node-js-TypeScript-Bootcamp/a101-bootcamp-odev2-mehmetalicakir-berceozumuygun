const trendyolServices = require("../services/trendyol");

exports.getAllBrands = async (req, res) => {
  const response = await trendyolServices.getAllBrands(); // API bağlantısının çekilmesini bekliyoruz
  res.send({
    status: true,
    data: response.brands // API içerisinde "brands" isimli bir dizide bulunduğu için orayı seçiyoruz
  });
};

exports.getBrand = async (req, res) => {
  const response = await trendyolServices.getBrand(req.params.name); // Url'den gelen name parametresini request olarak gönderiyoruz.
  res.send({
    status: true,
    data: response 
  });
};

