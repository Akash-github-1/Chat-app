import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const {MONGO_URL}=process.env;
        if (!MONGO_URL) throw new Error("MONGO_URL not set");
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log("MONGODB CONNECTED:",conn.connection.host)
    } catch (error) {
        console.error("Error connection to MONGODB:",error)
        process.exit(1);     // 1 status code means fail, 0 means succes
    }
}