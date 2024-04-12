import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import { userModel } from "../models/userSchema.js";
import ErrorHandler from "../middlewares/error.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {sendToken} from '../utils/jwtUtils.js'

dotenv.config();
const JWT_KEY = "thisissecurejwttokenkeyechonews";

export const Register = catchAsyncErrors(async (req, res, next) => {
    try {
        // console.log(req.body);
        const { name, email, phone, password, role } = req.body;
        if (!name || !email || !phone || !password || !role) {
            throw new ErrorHandler("Please Fill All Fields", 401);
        }

        const isEmail = await userModel.findOne({ email });
        if (isEmail) {
            // throw new ErrorHandler("This Email Already Exists, try another email", 401);
            return res.status(401).json({
                success: false,
                message: "This Email Already Exists, try another email"
            })

        }


        const saltRound = 10;
        const hashpassword = await bcrypt.hash(password, saltRound);

        const user = await userModel.create({
            name,
            email,
            phone,
            password: hashpassword,
            role
        });

        res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            user
        });
    } catch (error) {
        next(error); // Pass the error to the global error handler
    }
});

export const Login = catchAsyncErrors(async (req, res, next) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
            throw new ErrorHandler("Please Fill all fields", 401);
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            // throw new ErrorHandler("Please Provide Valid Details - Email", 401);
            return res.status(401).json({
                success: false,
                message: "Please Provide Valid Details"
            })
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            // throw new ErrorHandler("Please Provide Valid Details - Password", 401);
            return res.status(401).json({
                success: false,
                message: "Please Provide Valid Details"
            })
        }

        if (user.role !== role) {
            // throw new ErrorHandler(`User with provided email and ${role} not found`, 401);
            return res.status(401).json({
                success: false,
                message: `User with provided email and ${role} not found`
            })
        }

        sendToken(user, 201, res, "User Login Successfully");
        console.log(sendToken)
    } catch (error) {
        next(error); // Pass the error to the global error handler
    }
});

export const Logout = catchAsyncErrors(async (req, res, next) => {
    try {
        res.status(201).cookie("token", "", {
            httpOnly: true,
            expires: new Date(Date.now())
        }).json({
            success: true,
            message: "User Logout Successfully"
        });
    } catch (error) {
        next(error); // Pass the error to the global error handler
    }
});


export const getUser = catchAsyncErrors(async(req, res, next) => {
    
    try {
        const user = req.user;
        res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "User Not find"
        })
        console.log(error);
    }
})