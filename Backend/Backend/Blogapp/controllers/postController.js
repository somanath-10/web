const Post=require("../models/postModel");


exports.createPost=async(req,res)=>{
    try{
        const {title,body} = req.body;
        const post=new Post({
            title,body,
        });
        const savedPost=await post.save();

        res.json({
            post:savedPost,
        })
        
    }
    catch(error){
        console.error(error);

    }
    
}

exports.getallposts=async (req,res)=>{
    try{
        const post = await Post.find().populate('comments').exec();

        res.json({
            post:post
        })
    }catch(error){

    }
}