const mongoose=require('mongoose');

require('dotenv');

const dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("db connected successfully"))
    .catch((error)=>console.log("bd mei errror aaaya"))
}

module.exports=dbconnect;