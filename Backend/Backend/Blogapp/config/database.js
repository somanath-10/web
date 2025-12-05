const mongoose=require('mongoose');

require('dotenv').config();

const connectWithDb = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("db connected successfully"))
    .catch((err)=>console.log("error occured"))
};

module.exports=connectWithDb;