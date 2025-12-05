const Admin = require('../models/Admin');

exports.createUser=async(req,res)=>{
    try{
    const {name,role,count} = req.body;
    const response = await Admin.create({
        name:name,
        count:count,
        role:role
    })

    return res.status(200).json({
        success:true,
        message:"Entered Sucess fully",
        response,
    })
}
catch(err){
    return res.status(400).json({
        success:false,
        message:err.message,
    })
}
} 


exports.fecthAdmin = async(req,res)=>{
    try{
        const id = req.user.id;
        console.log(id);
        const response = await Admin.find({});
        return res.status(200).json({
            status:true,
            response
        })
    }
    catch(err){
        return res.status(400).json({
            status:false,
            message:err.message
        })
    }
}


exports.Vote = async(req,res)=>{
    try{
        const {President,Vice_President,Treasure} = req.body;
        const res1 = await Admin.findById(President);
        res1.count++;
        const r1 = await Admin.findByIdAndUpdate(President,{count:res1.count});

        const res2 = await Admin.findById(Vice_President);
        res2.count++;
        const r2= await Admin.findByIdAndUpdate(Vice_President,{count:res2.count});
        
        const res3 = await Admin.findById(Treasure);

        res3.count++;
        const r3 = await Admin.findByIdAndUpdate(Treasure,{count:res3.count});


        return res.status(200).json({
            success:true,
            message:"Vited Successfully",
        })

    }
    catch(err){
        
        return res.status(400).json({
            success:false,
            message:err.message,
        })

    }
}