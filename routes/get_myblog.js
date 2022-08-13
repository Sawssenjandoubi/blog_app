const blogSchema = require('../models/blog')
module.exports = async(req,res)=>{
    try{
        const {id} = req.params
        const getMyblog = await blogSchema.find({ userId:id }) 
        res.status(200).json({status:'ok',message:'these are your blogs',data:getMyblog})

    }
    catch(err){
        if(err) throw err
        res.status(401).json({status:false,err})
    }
}