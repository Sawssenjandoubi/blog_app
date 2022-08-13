const userSchema = require('../models/user');
const bcrypt = require('bcryptjs');
const {RegisterValidation} = require('../config/registerValidation')
module.exports = async(req,res)=>{
    try {
        let {firstName,lastName,email,phoneNumber,password} = req.body ;
        
       
      const emailValid = await userSchema.findOne({email})
        if(emailValid){
            return res.status(401).json({
                status:false,
                message:"email already exist please try again"
            })
        }
        //Register validation
        const {error} = await RegisterValidation({
            email,
            password,

        })
        if(error){
            return res.status(401).json({status:false,error})
        }
        const salt = await bcrypt.genSalt(10);
      
        
        const hashedPass = await bcrypt.hash(password, salt);

       
        const user = new userSchema({
            firstName,
            lastName,
            email,
            phoneNumber,
            password : hashedPass
        })

        newuser = await user.save()
        res.status(200).json({
        status:true,
        message:"user created successfully",
        data:newuser
    
        })
        }
    
        catch(err){
            if(err) throw err
            res.status(400).json({status:false,err})
        }
        }