import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB =async () =>{
    try {
        const connectionInstace = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log('Monogodb Connected !!!');
    } catch (error) {
        console.log('Error in Mongodb' , error)
        process.exit(1);
    }
} 

export default connectDB;