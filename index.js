const express = require('express')

const app = express();
const port =5000;
app.use(req,res=>{
    res.body("hello world");
    console.log(`listing in port no ${port}`);
})
