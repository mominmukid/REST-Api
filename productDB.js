const connectDB = require("./db/connect");
const productModel = require("./models/productModel");
const productData = require("./product.json");

const start = async () => {
  try {
    await connectDB();
    await productModel.create(productData);
    console.log("success");
  } catch (error) {
    console.log("error from product DB", error.message);
  }
};

start();
