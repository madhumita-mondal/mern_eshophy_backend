const products = require("../models/ProductModel");
const asyncHandler = require ('express-async-handler');

const getProducts = asyncHandler(async (req, res) => {
    const prods = await products.find({});
    // throw new Error("Some Eror");
    res.json(prods);
  });


  const getProduct = asyncHandler(async (req, res) => {
    const prod = await products.findById(req.params.id);
    if (prod) {
      res.json(prod);
    } else {
      res.status(404).json({ message: "Product Not Found" });
    }
  });
  
  module.exports = { getProducts, getProduct };