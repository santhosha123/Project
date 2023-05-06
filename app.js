const express=require('express')
const app=express()
const adminrouter=require('./routes/adminroute')
const userrouter=require('./routes/userroute')
app.use(express.json())
app.use('/admin',adminrouter)
app.use('/user',userrouter)
require('./database/connection')
const PORT=3002
app.listen(PORT,()=>
{
    console.log(`Sever Running on ${PORT}`)
})