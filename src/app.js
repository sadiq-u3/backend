import express, { urlencoded }  from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json({limit : "20kb"}))

app.use(urlencoded({extended : true}))

app.use(express.static("public"))

app.use(cookieParser())
console.log(process.env.corsOrigin);
app.use(cors({
    origin : process.env.corsOrigin,
    Credential : true
}))


export {app}


