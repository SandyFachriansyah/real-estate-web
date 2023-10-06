import express from 'express'
import moongoose from 'moongoose';
import dotenv from 'dotenv'
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