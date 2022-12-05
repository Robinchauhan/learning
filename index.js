const express = require('express')

const app = express();
const port =5000;
// app.use(req,res=>{
//     res.body("hello world");
//     console.log(`listing in port no ${port}`);
// })


const obj ={
    robin:"jkhkhjkh"
}
app.get('/api',(req,res)=>{
    res.send(obj)
})


app.listen(port,()=>{
    console.log(`app running on port no ${port}`);
})
