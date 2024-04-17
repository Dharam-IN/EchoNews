import jwt from "jsonwebtoken";
import { userModel } from "../models/userSchema.js";
import ErrorHandler from "./error.js";

export const isAuthenticated = async(req, res, next) => {
    try {
        // console.log(req.cookies);
        const token = req.cookies.token;

        if(!token){
            return new ErrorHandler("User not authenticated", 401);
        }

        // Verify Token
        const decoded = jwt.verify(token, process.env.JWT_SECURE);

        const user = await userModel.findById(decoded.id);

        if(!user){
            throw new ErrorHandler("User Not Found", 404)
        }

        req.user = user;
        next();

    } catch (error) {
        return next(error);
    }
}