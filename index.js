
const express = require('express')
const app = express();
const product= require('./routes/product')
require('dotenv').config();

const port=process.env.PORT || 3001;
const dbconnect=require('./db/connect')
// app.use(dbconnect())
app.get('/', function (req, res) {
  res.send('Hello bhai')
});

app.use('/products',product)


const start= async ()=>{
   try {
      await dbconnect()
      app.listen(port,()=>{
         console.log(`Server is running on port ${port}`)
      })
      
   } catch (error) {
      console.log(error.message);
      
   }

}

start();