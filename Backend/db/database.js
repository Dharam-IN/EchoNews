import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "EchoNews"
    }).then(() => {
        console.log("Connected to Database");
    }).catch((error) => {
        console.log(`Some Error occured. ${error}`);
    })
}