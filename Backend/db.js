import mongoose from "mongoose";
const url  = "mongodb+srv://vedant:vedant@cluster0.8ci2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async() =>{
    try {
        await mongoose.connect(url)
        console.log("MongoDB Connected")
    } catch (error) {
        console.log("MongoDB error" , error)
    }
}

export default connectDB