const express=require('express');

const app=express();

app.use(express.json());
var cors = require("cors");

const router=require("./routes/user");

require('dotenv').config();

const PORT=process.env.PORT || 4000

app.use(
    cors({
      origin: "*",
    })
  );
app.get("/",(req,res)=>{
    res.send(`<h1>This is Home page</h1>`);
})


const dbconnect = require("./config/database");
dbconnect();

app.use("/api/v1",router);

app.listen(PORT,()=>{
    console.log("it is running")
})