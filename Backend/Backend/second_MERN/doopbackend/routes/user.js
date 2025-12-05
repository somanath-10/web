const express=require("express");

const router=express.Router();

const {getUsers}=require("../controller/getUsers");
const {createUsers}=require("../controller/createUser")

router.get("/getusers",getUsers);
router.post("/createuser",createUsers)

module.exports=router;