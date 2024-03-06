import connectDB  from "./db/index.js";
import dotenv from "dotenv"
import fs from 'fs'


const response = dotenv.config({
    path : './.env',
})


connectDB()
