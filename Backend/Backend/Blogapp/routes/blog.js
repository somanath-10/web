const express=require('express');

const router = express.Router();

//import constrollers
const {dummyLink}=require("../controllers/LikeController");
const {createComment}=require("../controllers/CommentController")
const {createPost,getallposts}=require("../controllers/PostController")
const {createLikes,setunlike}=require("../controllers/LikeController")
//mapping

router.get("/dummylink",dummyLink)
router.post("/like/likes",createLikes)
router.post("/comments/create",createComment)
router.post("/posts/create",createPost);
router.get("/posts",getallposts)
router.post("/likes/unlike",setunlike)
//exports

module.exports=router;