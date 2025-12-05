const jwt = require("jsonwebtoken");

exports.auth = async(req,res,next)=>{
    try{
        const auther = req.headers.authorization;
        const token = auther.split(" ")[1];
        
        const decode = jwt.decode(token,"somu");
        req.user = decode;
        next();
    }
    catch(err){
        return res.status(200).json({
            message:err.message,
            success:false,
        })
    }
}