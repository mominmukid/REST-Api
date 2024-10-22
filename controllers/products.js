const productmodel = require("../models/productModel");

const getAllProducts = async (req, res) => {
  const { company, name, fetuchred, sort, select } = req.query;
  const queryObj = {};

  // this if use for check company is available
  if (company) {
    queryObj.company = company;
  }
  // this if use for check name is available

  if (name) {
    queryObj.name = { $regex: name, $options: "i" };
  }
  // this if use for check featured is available
  if (fetuchred) {
    queryObj.fetuchred = fetuchred;
  }
  //  this is our model and find method
  let apiData = productmodel.find(queryObj);

  // this if use for check sort is available if  available apply the sort method on the data
  if (sort) {
    let sortfix = sort.split(",").join(" ");
    apiData = apiData.sort(sortfix);
  }

  // this if use for check select is available if  available apply the select method on the data
  if (select) {
    let selectfix = select.split(",").join(" ");
    apiData = apiData.select(selectfix);
  }
  // this line  get the page number
  const page = Number(req.query.page) || 1;
  // this line  get the limit of the page
  const limit = Number(req.query.limit) || 5;
  // this line use to find the skips of on our page
  const skip = (page - 1) * limit;
  //this line use to impliment the skip and limit method
  apiData.skip(skip).limit(limit);
  //in this try and catch get the data and send the json responce with status code if fail the data fetching then throw the error
  try {
    const products = await apiData;
    res.status(200).json({ products,nbHits:products.length });
  } catch (error) {
    throw error;
  }
};


module.exports = { getAllProducts };
