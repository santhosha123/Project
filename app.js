const express=require('express')
const app=express()
const env=require('dotenv').config()
const adminrouter=require('./routes/adminroute')
const userrouter=require('./routes/userroute')
const cors=require('cors')
app.use(express.json())
app.use('/admin',adminrouter)
app.use('/user',userrouter)
app.use(cors())
const db=require('./database/connection')
const PORT=3002
const start=async()=>
{
    try{
        await db(process.env.MONGO_URI) 
        app.listen(PORT,()=>
        {
            console.log(`Sever Running on ${process.env.PORT}`)
        })
    }
    catch(error)
        {
            console.log("Error")
        }
}
start()
