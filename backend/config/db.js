import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config({
    path: '../config/.env'
})

const DB = () => {
    mongoose.connect(process.env.MONGO_URI).then(() =>{
        console.log('db connected successfully ');
        
    }).catch((error) =>{
        console.log(error);
        
    })
}

export default DB