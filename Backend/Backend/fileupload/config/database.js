const mongoose=require("mongoose");

require('dotenv').config();

 const dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("DB connected successfully"))
    .catch((error)=>console.log("error in db connection"))
}

module.exports=dbconnect;