const blogSchema = require('../models/blog')
const userSchema = require('../models/user')
module.exports = async (req,res) =>{
    console.log(userSchema.firstName)
    try{
        const {title,content,img} = req.body;
        const {id} = req.params
        const user = await userSchema.findById(id)
        const blog = new blogSchema({
            title,
            content,
            img,
            blogger : `${user.firstName} ${user.lastName}`,
            userId : `${user._id}`
        })
const newblog = await blog.save();
res.status(200).json({
    status:true,message:"blog created successfully",data:newblog,
}) 
    }
    catch(err){
        if (err) throw err;
        res.status(401).json({status:false,err})
    }
}