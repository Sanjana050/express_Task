const express=require('express');
const app=express();
app.use((req,res,next)=>{
    console.log('response');
   next();
})
app.use((req,res,next)=>{
    console.log('another response');
    res.send(  `<h1>Hello from express js</h1>`)
})

app.listen(80);