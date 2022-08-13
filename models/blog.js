const mongoose = require('mongoose')
const schema = mongoose.Schema;
const blogSchema = new schema({
    title:{
        type : String , 
        required : true ,
    },
    content:{
        type : String , 
        required : true ,
    },
    img:{
        type : String , 
        required : true ,
    },
    blogger:{
        type:String ,
        required: true ,
    },
    userId:{
        type:String ,
        required: true ,
    },

})
module.exports = mongoose.model("blogs",blogSchema);