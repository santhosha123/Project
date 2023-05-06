const express=require('express')
const app=express()
const router=require('./routes/adminroute')
app.use(express.json())
app.use('/admin',router)
require('./database/connection')
const PORT=3002
app.listen(PORT,()=>
{
    console.log(`Sever Running on ${PORT}`)
})