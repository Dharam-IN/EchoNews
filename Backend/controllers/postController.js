import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import postSchema from "../models/postSchema.js";

export const Post = catchAsyncErrors(async (req, res, next) => {
    // Check Role 
    const {role} = req.user;
    if(role !== "Author"){
        return next(new ErrorHandler("User Don't have access this resourse", 400));
    }

    const {title, description, category, tags} = req.body;

    if(!title || !description || !category || !tags){
        return next(new ErrorHandler("Please Provide Full Post Details", 400))
    }

    const author = req.user._id;

    const post = await postSchema.create({
        title,
        description,
        category,
        tags,
        author
    })

    res.status(200).json({
        success: true,
        message: "Post Successfuly!",
        post
    })


})