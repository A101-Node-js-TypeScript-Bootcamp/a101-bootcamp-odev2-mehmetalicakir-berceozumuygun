const githubServices = require("../services/github");

// getUser
exports.getUser = async (req,res) => {
    const response = await githubServices.getUser(req.params.username); // API bağlantısının çekilmesini bekliyoruz
    res.send({
        status: true,
        data: response // API içerisinde isimli bir dizide bulunduğu için orayı seçiyoruz
      });
}
exports.getRepos = async (req,res) => {
    const response = await githubServices.getRepos(req.params.username); // API bağlantısının çekilmesini bekliyoruz
    res.send({
        status: true,
        data: response // API içerisinde isimli bir dizide bulunduğu için orayı seçiyoruz
      });
}
exports.getFollowers = async (req,res) => {
    const response = await githubServices.getFollowers(req.params.username); // API bağlantısının çekilmesini bekliyoruz
    res.send({
        status: true,
        data: response // API içerisinde isimli bir dizide bulunduğu için orayı seçiyoruz
      });
}
exports.getFollowing = async (req,res) => {
    const response = await githubServices.getFollowing(req.params.username); // API bağlantısının çekilmesini bekliyoruz
    res.send({
        status: true,
        data: response // API içerisinde isimli bir dizide bulunduğu için orayı seçiyoruz
      });
}

exports.getOrg = async (req,res) => {
    const response = await githubServices.getOrg(req.params.organizationname); // API bağlantısının çekilmesini bekliyoruz
    res.send({
        status: true,
        data: response // API içerisinde isimli bir dizide bulunduğu için orayı seçiyoruz
      });
}

exports.getOrgRepos = async (req,res) => {
    const response = await githubServices.getOrgRepos(req.params.organizationname); // API bağlantısının çekilmesini bekliyoruz
    res.send({
        status: true,
        data: response // API içerisinde isimli bir dizide bulunduğu için orayı seçiyoruz
      });
}

