const mongoose=require('mongoose')
const schema=new mongoose.Schema(
    {
        booked_date:
        {
            type:Date,
            required:true
        },
       no_of_tickets:
        {
            type:Number,
            required:true
        },
       price:
        {
            type:String,
            required:true
        },
        user_id:
        {
            type:String,
            required:true
        },
        flight_id:
        {
            type:mongoose.Schema.Types.ObjectId,
            required:true
        }
    }
)
const bookingmodel=mongoose.model("booking",schema);
module.exports=bookingmodel;