import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import postSchema from "../models/postSchema.js";

// Post
export const Post = catchAsyncErrors(async (req, res, next) => {
    // Check Role 
    const { role } = req.user;
    if (role !== "Author") {
        return next(new ErrorHandler("User doesn't have access to this resource", 400));
    }

    const { title, description, category, tags } = req.body;
    console.log(req.body)
    if (!title || !description || !category || !tags) {
        return next(new ErrorHandler("Please provide full post details", 400));
    }

    // Check if file is uploaded
    if (!req.file) {
        return next(new ErrorHandler("No image uploaded", 400));
    }

    const postimage = req.file.originalname;
    const author = req.user._id;

    const post = await postSchema.create({
        title,
        postimage,
        description,
        category,
        tags,
        author
    });

    res.status(200).json({
        success: true,
        message: "Post successful!",
        post
    });
});




// Get All
export const getallposts = catchAsyncErrors(async (req, res, next) => {
    const posts = await postSchema.find({expired: false});
    console.log(posts);
    res.status(200).json({
        success: true,
        posts
    })
})


// Get One Post
export const getsinglepost = catchAsyncErrors(async(req, res, next) => {
    const {id} = req.params;
    try {
        const post = await postSchema.findById(id);
        if(!post){
            return res.status(404).json({
                success: false,
                message: "Post Not Found"
            })
        }

        res.status(200).json({
            success: true,
            post
        })
    } catch (error) {
        
    }
})


// My Posts
export const getMyPosts = catchAsyncErrors(async (req, res, next) => {
    console.log("ud")
    const {role} = req.user;

    if (role !== "Author") {
        return next(new ErrorHandler("User doesn't have access to this resource", 400));
    }

    try {
        const myposts = await postSchema.find({author: req.user._id});

        res.status(200).json({
            success: true,
            myposts
        })
    } catch (error) {
        console.log(error)
    }
})