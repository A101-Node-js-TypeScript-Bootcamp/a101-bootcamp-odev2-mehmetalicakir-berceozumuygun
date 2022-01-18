const trendyolServices = require("../services/trendyol");

exports.getAllBrands = async (req, res) => {
  let response = await trendyolServices.getAllBrands();
  console.log(response);
  res.send({
    status: true,
    data: response.brands
  });
};
