const express=require('express')
const app=express()
const adminrouter=require('./routes/adminroute')
const userrouter=require('./routes/userroute')
const cors=require('cors')
app.use(express.json())
app.use('/admin',adminrouter)
app.use('/user',userrouter)
app.use(cors())
require('./database/connection')
const PORT=3002
app.listen(PORT,()=>
{
    console.log(`Sever Running on ${PORT}`)
})