import mongoose from "mongoose";
export const connectDB = async (URI) =>{
    try {
        const connec = await mongoose.connect(URI)
        console.log(connec.connection.host)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1) // process exit with 1 means, database should exist with failure
    }
}