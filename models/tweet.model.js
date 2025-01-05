import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    description:{
        type: String,
        required : true
    },
    likes:{
        types: Array,
        default: []
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    bookmarks:{
        type : Array,
        default: []
    }
}, {timestamps: true})

export const Tweet = mongoose.model('Tweet', tweetSchema)