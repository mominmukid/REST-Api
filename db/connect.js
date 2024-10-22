const mongoose = require('mongoose');
require('dotenv').config();
const uri=process.env.APP_URI;


const dbconnect=()=>{
   try { 
      return mongoose.connect(uri)
   } catch (error) {
      console.log('error from database connection file',error.message);
      
   }

}

module.exports=dbconnect;