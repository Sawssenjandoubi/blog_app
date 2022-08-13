const blogSchema = require('../models/blog')
module.exports = async(req,res)=>{

    try{
        const get_all_blog = await blogSchema.find()
        res.status(200).json({status:"ok",message:"get all blogs",data:get_all_blog})

    }
    catch(err){
        if(err) throw err
        res.status(401).json({error})
    }
}