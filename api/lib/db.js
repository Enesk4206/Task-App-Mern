import mongoose from "mongoose";
 
export const databaseConnect = async()=>{
    try {
        if(databaseConnect){
            const databaseConnect = await mongoose.connect(process.env.MONGO_CONNECT)
            console.log(`Database connected successfully -> ${databaseConnect.connection.host}`)
        }
    } catch (error) {
        console.log("Database doesn't connected", error.message);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

