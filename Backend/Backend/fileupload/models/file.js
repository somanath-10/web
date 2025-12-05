const mongoose=require("mongoose");
const nodemailer=require("nodemailer");
require("dotenv").config();

const fileSchema=new mongoose.Schema({
    name:{
        type:String
    },
    image:{
        type:String
    },
    tags:{
        type:String
    },
    email:{
        type:String
    }


});

fileSchema.post('save',async function(doc){
    try{
        console.log("DOC===>",doc);
        let transproter=nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            },
        });

        console.log("hello jeee");


        //send mail

        let info = await transproter.sendMail({
            from:`code help`,
            to:doc.email,
            subject:"new file uploaded",
            html:`<h2>hello jee</h2> <p>file uploaded</p> <a href="${doc.image}">${doc.image}</a>`,
        })

        console.log("infooooo====>",info);


    }
    catch(error){
        resizeBy.status(400).json({
            success:false,
            message:"error in model.js"
        })

    }
})

module.exports=mongoose.model("File",fileSchema);
