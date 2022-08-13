const express = require('express');
const app = express()
const mongoose = require('mongoose');
const userSchema = require('./models/user')
require("dotenv").config();
const route = require('./routes/route_add_user')
const uri = process.env.uri;
const port = process.env.PORT||5000;
app.use(express.json())
mongoose.connect(uri,
    {useNewUrlParser: true,useUnifiedTopology: true},
    (err)=>{
    if(err) throw err
    console.log('connected successfully')
})

app.use('/api',route)

app.listen(port,(err)=>{
    if (err) throw err
    console.log(`app is running on the port :http://localhost:{$port}`)
})