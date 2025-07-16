import mongoose, {model, Schema} from "mongoose";

const contentTypes = ['youtube', 'twitter'];

const userSchema = new Schema({
    username: {type: String, 
                required: true,  unique: true}, 
    password: {type:String, required: true}
});

const contentSchema = new Schema({
    type: {type:String,  enum:contentTypes, requried: true, }, 
    link: {type: String, required: true}, 
    title:{type:String}, 
    tags:[{type:mongoose.Types.ObjectId, ref:'Tag'}], 
    userId: {type:mongoose.Types.ObjectId, ref:'User'}, 
})

const tagSchema  = new Schema({
    title: {type:String, required: true, unique: true}, 
})


const linkSchema = new Schema({
    hash: {type:String, required:true}, 
    userId: {type:mongoose.Types.ObjectId, ref:'User', required: true}, 
})


export const UserModel = model("User", userSchema);

export const TagModel = model("Tag", tagSchema);

export const LinkModel = model("Link", linkSchema);

export const ContentModel = model("Content", contentSchema);
