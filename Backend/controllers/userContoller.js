import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import { userModel } from "../models/userSchema.js";
import ErrorHandler from "../middlewares/error.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {sendToken} from '../utils/jwtUtils.js'

dotenv.config();
const JWT_KEY = "thisissecurejwttokenkeyechonews";
// const JWT_KEY = process.env.JWT_SECURE;
// console.log(process.env.JWT_SECURE)

export const Register = catchAsyncErrors(async (req, res, next) => {
    const {name, email, phone, password, role} = req.body;
    if(!name, !email, !phone, !password, !role){
        return next(new ErrorHandler("Please Fill All Fields", 401));
    }

    const isEmail = await userModel.findOne({email: email});
    console.log(isEmail);
    if(isEmail){
        return next(new ErrorHandler("This Email Allready Exists, try another email", 401));
    }

    const saltRound = 10;
    const hashpassword = await bcrypt.hash(password, saltRound)

    const user = await userModel.create({
        name,
        email,
        phone,
        password: hashpassword,
        role
    });

    res.status(200).json({
        success: true,
        message: "User Register Successfully",
        user
    });
})


// Login Controller
export const Login = catchAsyncErrors(async(req, res, next) => {
    const {email, password, role} = req.body;

    if(!email, !password, !role){
        return next(new ErrorHandler("Please Fill all fields", 401));
    };

    const user = await userModel.findOne({email});
    
    if(!user){
        return next(new ErrorHandler("Please Provide Valid Details - Email"));
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if(!passwordMatch){
        return next(new ErrorHandler("Please Provide Valid Details - Password"));
    }

    if(user.role !== role){
        return next(new ErrorHandler(`User with provide email ${role} not found`, 401));
    }

    const token = sendToken(user, 201, res, "User Login Successfully");

})