const blogSchema = require('../models/blog')
module.exports = async (req,res)=>{
    try{
       
        const {_id} = req.query ;
 const update =await blogSchema.findByIdAndUpdate(_id,{$set:{...req.body}},{new:true})
console.log(update)
return res.status(200).json({
    status:"ok",
    message:"update done"})
    }
    catch(err){
        if (err) throw err
        res.status(401).json({status:false,err})
    }
}