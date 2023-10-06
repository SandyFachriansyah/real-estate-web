import express from 'express'
import moongoose from 'moongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
dotenv.config();

moongoose.connect(process.env.MONGO).then(() => {
    console.log('conneted to Mongodb')
    }).catch((err)=> {
    console.log(err)
    })


const app = express();

app.listen(3000, () =>{
    console.log('server is running in port 3000!')
    }
)

app.use("/api/user", userRouter)