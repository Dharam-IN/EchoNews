import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Provide Your Name"],
        minLength: [3, "Name Must Containe at least 3 Characters!"],
        minLength: [30, "Name cannot exceed 30 Characters"]
    },
    email: {
        type: String,
        required: [true, "Please Enter Your email"],
        validator: [validator.isEmail, "Please Provide a valid email"]
    },
    phone: {
        type: Number,
        required: [true, "Please Provide Your Phone Number"]
    },
    password: {
        type: String,
        required: [true, "please Provide your password"],
        minLength: [8, "Password Must Containe at least 8 Characters!"],
        minLength: [15, "Password cannot exceed 15 Characters"]
    },
    role: {
        type: String,
        required: [true, "Please Select a role"],
        enum: ["User", "Author"]
    }
})

export const userModel = mongoose.model("Users", userSchema);
