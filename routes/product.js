const express= require('express');
const router =express.Router();
const getProductscon= require('../controllers/products') 

   router.route('/').get(getProductscon.getAllProducts);
module.exports=router;