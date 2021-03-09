const mongoose =require("mongoose")
const Schema=mongoose.Schema;
const PostSchema= new Schema({

    user:{
        type:Schema.Types.ObjectId,
        reg:'users'

    },
    text:{
        type:String,
        required:true
    },

    name:{
        type:String
    },

    avatar:{
        type:String
    },

    likes: [
        {
            user:{
                type:Schema.Types.ObjectId,
                reg:'users'
        
            },
        }
    ],
    comments: [
        {
            user:{
                type:Schema.Types.ObjectId,
                reg:'users'
        
            },
            text:{
                type:String,
                required:true
            },
            date:{
                type:Date,
                default:Date.now
            }
        }
    ],
    date:{
        type:Date,
        default:Date.now
    }


})

module.exports=Posts=mongoose.model("posts",PostSchema)