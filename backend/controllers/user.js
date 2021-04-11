import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

export const signup = async(req, res) => {
    const {name,email,password,confirmPassword} = req.body;

    try {
        const existingUser = await User.findOne({email});

        if(existingUser) return res.status(400).json({message: "User already exists."});
        if(password !== confirmPassword) return res.status(400).json({message: "Passwords don't match."});
        const hashedPassword = await bcrypt.hash(password,12);
        const result = await User.create({email, password:hashedPassword,name});
        const token = jwt.sign({email:result.email, id:result._id}, 'test', {expiresIn:"1h"});
        res.status(200).json({result,token});
    } catch (error) {
        res.status(500).json({message: "Someting went wrong!"});
    }
};

export const signin = async(req, res) => {
    const {email,password} = req.body;

    try {
        const existingUser = await User.findOne({email});

        if(!existingUser) return res.status(400).json({message: "User not found"});
        
        const isPasswordCorretct = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorretct) return res.status(400).json({message:"Invalid credidentals"});
        
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h" });
        res.status(200).json({result: existingUser,token});
    } catch (error) {
        res.status(500).json({message: "Someting went wrong!"});
    }
};