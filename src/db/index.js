import { mongoose } from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async ()=>{

    try {

        const connectionInstance =  await mongoose.connect(`${process.env.mongodbUrl}/${DB_NAME}`);
        
        console.log(`\n mongoodb connected !!! DB Host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("mongoodb connection error: " + error);
        process.exit(1)
    }
}

export default connectDB
