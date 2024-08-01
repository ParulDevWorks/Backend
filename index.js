const https = require('https');
const express= require('express');
const app= express();
require('dotenv').config();
const port=8080;

const name={
    "nickName":"Naina",
    "Original":"Parul"
}
app.get('/',(req,res)=>{
    res.send('response send');
})
app.get('/check',(req,res)=>{
    res.send("<h1>This is express app</h1>");
})
app.get('/name',(req,res)=>{
    res.json(name);
})
app.listen(port,(req,res)=>{
    console.log("connected to port");
})