const express=require('express')
const app=express();
const bodyParser=require('body-parser')
const constant=require('./config/constant')
const studentRouter=require('./route/student')

app.use(bodyParser.json())
app.use(studentRouter)

app.get('/mongo',function(req,res){
    // const datafromClient=req.body;
res.send({message:"this is mongo"})
// console.log(datafromClient)
})
app.listen(constant.PORT,()=>{
    console.log(`server running at port ${constant.PORT} `)
})