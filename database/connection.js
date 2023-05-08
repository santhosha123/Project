const mongoose=require('mongoose')
 const db=(URL)=>
{mongoose.connect(URL)
.then(()=>
{
    console.log("Database connected")
})
.catch((err)=>
{
    console.log("Err")
})
}
module.exports=db;