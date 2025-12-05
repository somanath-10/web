const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    count:{
        type:Number,
    },
    role:{
        type:String,
        enum:["President","Vice-President", "Treasure"],
    }
})

module.exports = mongoose.model("Admin",adminSchema);