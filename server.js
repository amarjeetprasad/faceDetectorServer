const express = require('express');
const bodyParser=require('body-parser');
const bcrypt=require('bcrypt');
const cors=require('cors');
const  knex = require('knex');
const register = require('./controller/register');
const signin= require("./controller/signin");
const profile=require('./controller/profile');
const image=require('./controller/image');
const imageurl=require('./controller/imageurl');

const db =knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'amarjeet',
      database : 'face_detector_database'
    }
  });

const app=express();

//middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
// app.use(express.static(__dirname));



app.get('/',(req,res)=>{
    db.select().table('users')
    .then(data=>res.json(data));
})


app.post('/signin',(req,res)=>{signin.handleSignin(req,res,db,bcrypt)});


app.post('/register',(req,res)=>{register.handleRegister(req,res,db,bcrypt)});



app.get('/profile/:id',(req,res)=>{profile.handleProfile(req,res,db)});


app.put('/image',(req,res)=>{image.handleImage(req,res,db)});

app.post('/imageurl',(req,res)=>{imageurl.handleImageurl(req,res)});

app.listen(3000,()=>console.log('server is running on port 3000'))