import express from 'express'
import dotenv from 'dotenv'
import DB from './config/db.js';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.route.js'
dotenv.config({
    path : '.env'
})

DB();
const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(cookieParser());

//http://localhost:8080/api/v1/user/register
app.use('/api/v1/user',userRouter)


app.listen(process.env.PORT,() =>{
    console.log(`server is listening on port ${process.env.PORT}`)
})