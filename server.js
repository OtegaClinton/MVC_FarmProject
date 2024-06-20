require("dotenv").config();
const express= require("express");
const mongoose = require("mongoose");
const PORT= process.env.PORT;
const DATABASE=process.env.DATABASE;
const farmRouter=require('./route/farmRouter')

const app= express();

app.use(express.json());

app.use(farmRouter)

app.listen(PORT,()=>{
    console.log(`Server is listening to Port: ${PORT}.`)
})

mongoose.connect(DATABASE)
.then(()=>{
    console.log(`Database connected Successfully.`)
})
.catch((error)=>{
    console.log(`Database Connection Failed.`,error.message)
});