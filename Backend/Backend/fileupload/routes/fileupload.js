const express=require('express');
const router=express.Router();

const {localfileUpload,imageUpload,videoUpload,imagesizereducerUpload}=require("../controllers/fileupload");


router.post("/localfileupload",localfileUpload);
router.post("/imageupload",imageUpload);
router.post("/videoupload",videoUpload);
router.post("/imagesizereducer",imagesizereducerUpload)



module.exports=router;