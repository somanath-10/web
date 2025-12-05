const express=require("express");

const app=express();

app.use(express.json());

require("dotenv").config();

const PORT=process.env.PORT || 3000;

const blog = require('./routes/blog')

//mount karo

app.use("/api/v1",blog);

const connectWithDb=require("./config/database")

connectWithDb();


app.listen(PORT,()=>{
    console.log(`app is started at ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send(`<h1>this is my home page baby</h1>`);
})