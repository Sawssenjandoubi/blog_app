
const blogSchema = require('../models/blog')
module.exports = async(req,res)=>{
    try{
        const {id} = req.params
const delete_blog = await blogSchema.findByIdAndDelete(id)
res.status(200).json({status:true,message:"the blog is delete "})
    }
    catch(err){
        if (err) throw err
        res.status(401).json({err})
    }
}