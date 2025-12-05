const express=require('express');
const app=express();
app.use(express.json());
require("dotenv").config();
const PORT=process.env.PORT || 4000;

const fileUplad=require("express-fileupload");

app.use(fileUplad({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

const upload=require("./routes/fileupload")
app.use("/api/v1",upload)

const dbconnect=require("./config/database");
dbconnect();

const cloudinaryConnect=require("./config/cloudinary");
cloudinaryConnect.cloudinaryConnect();


app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`)
})