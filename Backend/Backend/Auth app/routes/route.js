const express=require('express')
const router=express.Router();

const{auth,isStudent,isAdmin}=require("../middleware/auth");

const {login,signup,deleted}=require("../controllers/Auth");

router.post("/login",login);
router.post("/signup",signup);
router.delete("/delete",deleted);


router.get("/test",(req,res)=>{
    res.json({
        success:true,
        message:"testing is successfully"
    })
})

router.get("/student",auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:"logined in as student"
    })
});
router.get("/admin",auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"logined in as Admin page"
    })
});

module.exports=router;