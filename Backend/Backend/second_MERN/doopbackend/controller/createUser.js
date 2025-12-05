const User=require('../models/User');
exports.createUsers=async(req,res)=>{
    try{
    const{name,email,title,department,role}=req.body;

    const user = await User.create({
      name,
      email,
      title,
      department,
      role,
      
    });
    return res.status(200).json({
        data:user,
    });
}catch(error){
    console.log("finding error");
}
}