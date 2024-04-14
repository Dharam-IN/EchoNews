import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minLength: [30, "Title must be at least 30 characters long"],
        maxLength: [100, "Title must not exceed 100 characters"]
    },
    postimage: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: [true, "Post description is required"],
    },
    category: {
        type: String,
        required: [true, "Category is required"],
    },
    expired: {
        type: Boolean,
        default: false
    },
    expirationDate: {
        type: Date,
        default: null
    },
    author: {
        type: mongoose.Schema.ObjectId,
        ref: "Author",
        required: [true, "Author name is required"]
    },
    tags: [String],
    likes: {
        type: Number,
        default: 0
    }, 
    dislikes: {
        type: Number,
        default: 0
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    dateCreated: {
        type: Date,
        default: Date.now // Use current date/time by default
    }
});

export default mongoose.model('Post', postSchema);
