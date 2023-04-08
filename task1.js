const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))


app.use('/add-product',(req,res,next)=>{
    
   
   res.send(`<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>`)

})

app.post('/product',(req,res,next)=>{
    console.log(`name:${req.body.title} and size:${req.body.size}`);
    res.redirect('/');
})
app.use('/',(req,res,next)=>{
   
    
    res.send(  `<h1>Hello from express js</h1>`)
})

app.listen(80);