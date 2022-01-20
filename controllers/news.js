const newsServices = require("../services/news");

// getSources
exports.getSources = async (req,res) => {
    const response = await newsServices.getSources(); // API bağlantısının çekilmesini bekliyoruz
    res.send({
        status: true,
        data: response.sources // API içerisinde isimli bir dizide bulunduğu için orayı seçiyoruz
      });
}

// getNewsBySource
exports.getNewsBySource = async (req,res) => {
    const response = await newsServices.getNewsBySource(req.params.source); // API bağlantısının çekilmesini bekliyoruz
    res.send({
        status: true,
        data: response.articles // API içerisinde isimli bir dizide bulunduğu için orayı seçiyoruz
      });
}
// getNewsFromUSA
exports.getNewsFromUSA = async (req,res) => {
    const response = await newsServices.getNewsFromUSA(req.params.source); // API bağlantısının çekilmesini bekliyoruz
    res.send({
        status: true,
        data: response.articles // API içerisinde isimli bir dizide bulunduğu için orayı seçiyoruz
      });
}
// getNewsFromGB
exports.getNewsFromGB = async (req,res) => {
    const response = await newsServices.getNewsFromGB(req.params.source); // API bağlantısının çekilmesini bekliyoruz
    res.send({
        status: true,
        data: response.articles // API içerisinde isimli bir dizide bulunduğu için orayı seçiyoruz
      });
}
// getNewsFromAustralia
exports.getNewsFromAustralia = async (req,res) => {
    const response = await newsServices.getNewsFromAustralia(req.params.source); // API bağlantısının çekilmesini bekliyoruz
    res.send({
        status: true,
        data: response.articles // API içerisinde isimli bir dizide bulunduğu için orayı seçiyoruz
      });
}
// getNewsFromRussia
exports.getNewsFromRussia = async (req,res) => {
    const response = await newsServices.getNewsFromRussia(req.params.source); // API bağlantısının çekilmesini bekliyoruz
    res.send({
        status: true,
        data: response.articles // API içerisinde isimli bir dizide bulunduğu için orayı seçiyoruz
      });
}
// getNewsFromIndia
exports.getNewsFromIndia = async (req,res) => {
    const response = await newsServices.getNewsFromIndia(req.params.source); // API bağlantısının çekilmesini bekliyoruz
    res.send({
        status: true,
        data: response.articles // API içerisinde isimli bir dizide bulunduğu için orayı seçiyoruz
      });
}
// getNewsFromFrance
exports.getNewsFromFrance = async (req,res) => {
    const response = await newsServices.getNewsFromFrance(req.params.source); // API bağlantısının çekilmesini bekliyoruz
    res.send({
        status: true,
        data: response.articles // API içerisinde isimli bir dizide bulunduğu için orayı seçiyoruz
      });
}
