import { User } from "../models/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async(req,res) => {
    try {
        const {name,userName, email, password} = req.body
        if(!name || !userName|| !email|| !password){
            return res.status(400).json({
                message : 'All field required',
                success : false
            })
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({
                message : 'User already exist',
                success : false
            })
        } 

        const hashedPassword = await bcrypt.hash(password, 16);


        await User.create({
            name,
            userName,
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


export const login = async(req,res) => {
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                message : "filled all the blanks",
                success : false
            })
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message : 'user does not exist',
                success : false
            })
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                message : 'incorrect password',
                success : false
            })
        }

        const tokenData = {
            userId : user._id
        }
        const token = await jwt.sign(tokenData, process.env.JWT_TOKEN,{expiresIn:"1d"})
        return res.status(201).cookie("token", token,{expiresIn:'1d', httpOnly: true}).json({
            message : `welcome back ${user.name}`,
            success : true,
        })

    } catch (error) {
        console.log(error);
        
    }
}

export const logout = async(req,res) => {
    try {
        return res.cookie("token", "", {expiresIn: new Date(Date.now())}).json({
            message : 'you loggedout successfully',
            success : true
        })
    } catch (error) {
        console.log(error)
    }
}