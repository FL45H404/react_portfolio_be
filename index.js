require('dotenv').config()
const express=require('express');
const ejs=require('ejs');
const path=require('path');
// const db=require('./db') 
const app=express();
const cors=require('cors')
require('./conn/db')
const cookieParser=require('cookie-parser');      
const port=process.env.PORT || 5000;
var session = require('express-session');
const jwt = require('jsonwebtoken');
// const Register = require('../model/register')
app.use(cors({credentials:true,origin:true}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(session({
    key:'uid',
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {expires:60000000 }
  }))
// app.use(function(req,res,next){
//   res.header('Access-Control-Allow-Origin','*')
//   res.header('Access-Control-Allow-Credentials',true)
//   next();
// })
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('public'));
app.use('/public', express.static(path.join(__dirname, '/public')));


const Auth=async (req,res,next)=>{
try{
    const token=req.cookies.jwt;
    console.log(token)
    if(token){
        const verifyToken=jwt.verify(token,process.env.TOKEN_SECRET)
        console.log(verifyToken)
        next();
    }else{
return res.status(401).send('unAuthorized')
    }
}catch(err){
    console.log(err)
    return res.status(401).send('unAuthorised')
}

}
const register=require('./routes/register');
const contact=require('./routes/contactRoute')
app.use('/',register)
app.use('/',contact)


app.get('/about',Auth,(req,res)=>{
res.status(200).send('about page')
})
app.listen(port,()=>{
    console.log(`server running on ${port}`)
})