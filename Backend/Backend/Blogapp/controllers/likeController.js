exports.dummyLink = (req,res)=>{
    res.send("this is dummy route page");
};

const Post=require("../models/postModel");
const Like=require("../models/likeModel");

exports.createLikes = async (req,res)=>{
    try{
    const {post,user}=req.body;

    const like = new Like({
        post,user,
    });

    const savedLike=await like.save();

    const updatepost=await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true}).populate('likes').exec();

    res.json({
        post:updatepost
    })
}catch(error){

}


}

exports.setunlike = async(req,res)=>{
    try{
        const{post,like}=req.body;

        const deleteLike=await Like.findOneAndDelete({post:post,_id:like})

        const updatedpost = await Post.findByIdAndUpdate(post,{$pull:{likes:deleteLike._id}},{new:true})

        res.json({
            post:updatedpost
        })

    }catch(error){

    }
}