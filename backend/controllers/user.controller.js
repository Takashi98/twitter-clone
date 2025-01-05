import { User } from "../models/user.model"
import bcrypt from 'bcrypt'

export const Register = async(req,res) => {
    try {
        const {name,username, email, password} = req.body
        if(!name || !username|| !email|| !password){
            return res.status(400).json({
                message : 'All field required',
                success : false
            })
        }
        const user = await User.findOne(email);
        if(user){
            return res.status(401).json({
                message : 'User already exist',
                success : false
            })
        } 

        const hashedPassword = await bcrypt.hash(password, 16);


        await User.create({
            name,
            username,
            email,
            password : hashedPassword
        })

        res.status(201).json({
            message : 'account create successfully',
            success : true
        })
    } catch (error) {
        console.log(error)
    }
}