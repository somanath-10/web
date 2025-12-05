const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth=(req,res,next)=>{
    try{
        const token=req.body.token;
        if(!token){
            res.status(400).json({
                success:true,
                message:"token missing",
            });
        }
        try{
            const decode=jwt.verify(token,process.env.JWT_SECRET);
            console.log(decode);

            req.user=decode;
        }
        catch(error){
            return res.status(401).json({
                success:flase,
                message:" token is invalid"
            });

        }

    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:"something went wrong",
        });
       
    }
}

exports.isStudent = (req, res, next) => {
    try {
        if (req.user.role !== "Student") {
            return res.status(401).json({
                success: false,
                message: "This is a protect route for students you can not access it"
            })
        }
        next();
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: "User Role is not Matching"
        })
    }
}
exports.isAdmin = (req, res, next) => {
    try {
        if (req.user.role !== "Admin") {
            return res.status(401).json({
                success: false,
                message: "This is a protect route for admin you can not access it"
            })
        }
        next();
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: "User Role is not Matching"
        })
    }
}