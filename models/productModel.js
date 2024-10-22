const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  fetuchred: {
    type: Boolean,
    default: false,
  },
  reating: {
    type: Number,
    default:4.9
  },
  createdat: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type:String,
    enum:{
      values: ["Apple", "Samsung", "Sony",'dell','mi'],
      message: `{VALUE} are not supported`,
    }
  },
});

module.exports = mongoose.model("Product", productSchema);
