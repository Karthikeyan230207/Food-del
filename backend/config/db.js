import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://karthikeyan230207_db_user:karthi10:XT3ZidBZNJuEGfGH@cluster0.och86rm.mongodb.net/?appName=Cluster0').then(() => {
        console.log("Connected to MongoDB");

        
    })

}

