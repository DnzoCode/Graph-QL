import mongoose from "mongoose";
import { MONGODB_URI } from "../config.js";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_URI)
        console.log(`MongoDb connected: ${conn.connection.name}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}