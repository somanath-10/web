const File=require("../models/file");
const cloudinary=require('cloudinary').v2;

exports.localfileUpload=async(req,res)=>{
    try{
        const file=req.files.file;
        console.log("file aagaya jeef",file);

        let path = __dirname+"/files/"+Date.now();
        console.log("PATH=>",path);
        file.mv(path,(err)=>{
            console.log("err in file move path")
        });

        res.json({
            success:true,
            message:"LOcal file mey upload ho gaya"
        });
    }
    catch(error){

    }
}

function isfileTypeissupported(type,supporetedTypes){
    return supporetedTypes.includes(type);
}
async function uploadfiletocloudnary(file,folder,quality){
    const options={folder};
    if(quality){
        options.quality=quality;
    }
    options.resource_type="auto";
    return await cloudinary.uploader.upload(file.tempFilePath,options);
}

exports.imageUpload=async(req,res)=>{
    try{

        const{name,tags,email}=req.body;
        console.log({name,tags,email});

        const file = req.files.imageFile;
        console.log(file);

        //validation
        const supporetedTypes=["jpg","jpeg","png"];
        const fileType=file.name.split('.')[1].toLowerCase();

        if(!isfileTypeissupported(fileType,supporetedTypes)){
            return res.status(401).json({
                success:false,
                message:"file format not supported"
            })
        }

        //file upload
        console.log("response");

        const response=await uploadfiletocloudnary(file,"codehelp");
        
        console.log(response);

        //db entry
        const fileData=await File.create({

            name,tags,email,image:response.secure_url

        })

        res.json({
            success:true,
            image:response.secure_url,
            
            message:"entry of img successfully performed"
        })



    }
    catch(error){
        res.status(400).json({
            message:("error in image upload")

        })
    }
}

exports.videoUpload=async(req,res)=>{
    try{
        const{name,tags,email}=req.body;
        console.log({name,tags,email});

        const file = req.files.videoFile;
        console.log(file);
        const supporetedTypes=["mp4","mov"];
        const fileType=file.name.split('.')[1].toLowerCase();
        console.log(fileType);

        if(!isfileTypeissupported(fileType,supporetedTypes)){
            return res.status(401).json({
                success:false,
                message:"file format not supported"
            })
        }

        //file upload
        console.log("response");

        const response=await uploadfiletocloudnary(file,"codehelp");
        
        console.log(response);

        const fileData=await File.create({

            name,tags,email,image:""

        })

        res.json({
            success:true,
            
            
            message:"entry of video successfully performed"
        })

    }
    catch(error){
        res.status(400).json({
            success:false,
            message:"went wrong in video upload"
        })
    }
}


exports.imagesizereducerUpload=async(req,res)=>{
    try{

        const{name,tags,email}=req.body;
        console.log({name,tags,email});

        const file = req.files.imageFile;
        console.log(file);

        //validation
        const supporetedTypes=["jpg","jpeg","png"];
        const fileType=file.name.split('.')[1].toLowerCase();

        if(!isfileTypeissupported(fileType,supporetedTypes)){
            return res.status(401).json({
                success:false,
                message:"file format not supported"
            })
        }

        //file upload
        console.log("response");

        const response=await uploadfiletocloudnary(file,"codehelp",30);
        
        console.log(response);

        //db entry
        const fileData=await File.create({

            name,tags,email,image:response.secure_url

        })

        res.json({
            success:true,
            image:response.secure_url,
            
            message:"entry of img successfully performed"
        })



    }
    catch(error){
        res.status(400).json({
            message:("error in image upload")

        })
    }
}