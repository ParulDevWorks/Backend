const express= require('express');
const app= express();
require('dotenv').config();
const port=process.env.PORT;
app.get('/',(req,res)=>{
    res.send('response send');
})
app.get('/check',(req,res)=>{
    res.send("<h1>This is express app</h1>");
})
app.listen(port,(req,res)=>{
    console.log("connected to port");
})