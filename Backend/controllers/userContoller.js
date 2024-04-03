import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import { userModel } from "../models/userSchema.js";
import ErrorHandler from "./error.js";

export const Register = catchAsyncErrors(async (req, res, next) => {
    const {name, email, phone, password, role} = req.body;
    if(!name, !email, !phone, !password, !role){
        return next(new ErrorHandler("Please Fill All Fields", 401))
    }

    const isEmail = await userModel.findOne({email: email});
    console.log(isEmail);
    if(isEmail){
        return next(new ErrorHandler("This Email Allready Exists, try another email"));
    }

    const user = await userModel.create({
        name,
        email,
        phone,
        password,
        role
    })

    res.status(200).json({
        success: true,
        message: "User Register Successfully"
    })
})