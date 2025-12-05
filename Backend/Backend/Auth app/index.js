const express=require('express');
const app=express();
require('dotenv').config();
const PORT=process.env.PORT || 4000;
app.use(express.json());

const dbconnect=require("./config/database")
dbconnect();

const user=require("./routes/route");
app.use("/api/v1",user);


app.listen(PORT,()=>{
    console.log(`App is listeining at ${PORT}`)
})

app.get("/",(req,res)=>{
    res.send("hello jeee")
})
