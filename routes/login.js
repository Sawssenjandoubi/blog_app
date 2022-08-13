const mongoose = require('mongoose');
const userSchema = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const secret_key =process.env.SECRET_KEY
module.exports = async(req,res)=>{
    try{
      const  {email,password} = req.body ;
      const getEmail = await userSchema.findOne({email})
      /*const getPass = await userSchema.findOne({password})*/
      //CHECK THE PASSWORD
      if (!getEmail) {
        return res.status(401).json({
            status: false,
            message: "Wrong e-mail or password, please verify again",
        });
    }
      let match = await bcrypt.compare(password, getEmail.password);
      if (!match) {
          return res.status(401).json({
              status: false,
              message: "Wrong e-mail or password, please verify again",
          });
      }
      
       
     
      
      
      
      //create token
      const token = await jwt.sign({
        id : getEmail._id,
        email : getEmail.email,
        password : getEmail.password  
      },secret_key,
      { expiresIn: "10h" }
      )
      res.status(200).json({
        status:true,
        message:"welcome",
        token,
        id: getEmail._id
        })
        
        }
    
    catch(err){
        if (err) throw err
        res.status(401).json({status : false , err})
    }
}