const User=require("../models/User");


exports.getUsers=async(req,res)=>{
    try{
    

    const detailsofuser=await User.find({})

    res.json({
        success:true,
        post:detailsofuser,
    });
}
catch(error){

}
    
}