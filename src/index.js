import dotenv from 'dotenv'
import connectDB from "./db/index.js";
dotenv.config({ path : './env'}) 
import app from './app.js'


connectDB() 
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`server is Running At : ${process.env.PORT}`);
    })
})         
.catch( (err)=>{
    console.log("Mongodb Connection failed" ,err  );
} )