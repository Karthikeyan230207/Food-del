import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://karthikeyan230207_db_user:kuMdn21EYxsOx5T2@cluster0.och86rm.mongodb.net/Food-del').then(() => {
        console.log("Connected to MongoDB");
    })

}

