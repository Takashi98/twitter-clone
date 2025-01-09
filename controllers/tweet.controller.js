import { Tweet } from "../models/tweet.model.js";

export const createTweet = async(req,res) => {
    try {
        const {description} = req.body;
        const userId = req.user
        
        if(!description){
            return res.status(401).json({
                message : 'Description is required',
                success : false
            })
        }
        await Tweet.create({
            description,
            userId
        })

        return res.status(200).json({
            message : 'Tweet created successfully',
            success : true
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message : 'Internal sever problem'
        })
    }
}