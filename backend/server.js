const express = require ("express");
require ('dotenv').config();
const { default: mongoose } = require("mongoose");
const cors = require("cors")
const app = express()


port = process.env.port
mongo = process.env.mongo_url

app.use(express.json())
app.use(cors())




mongoose.connect(mongo)
         .then(()=>{
            console.log("DB connected");
         })
         .catch((error)=>{
            console.log(error);
         })

app.listen(port,()=>{
      console.log(`server running on port ${port}`); 
})