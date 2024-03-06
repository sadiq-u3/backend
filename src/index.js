import { app } from "./app.js";
import connectDB  from "./db/index.js";
import dotenv from "dotenv"


const response = dotenv.config({
    path : './.env',
})

connectDB()
.then(()=>{
        app.listen(process.env.PORT ||3000  , ()=> console.log(`app is listing on PORT ${process.env.PORT}`)) 
}) 
.catch((err)=>{
    console.log("Connection failed from index.js : " + err);
})
