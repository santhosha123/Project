const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://asanthosh2502:S5@cluster0.2chnso5.mongodb.net/DEVREV?retryWrites=true&w=majority")
.then(()=>
{
    console.log("Database connected")
})
.catch((err)=>
{
    console.log("Err")
})