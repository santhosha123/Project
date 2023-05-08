const flightmodel=require('../database/Flightmodel')
const bookingmodel=require('../database/Bookingmodel')
const getflight=async(req,res)=>
{
    try
    {
        console.log(req.query)
        // Get the current time
        var currenttime = new Date(req.query.departure_date);
       // console.log(currenttime)
        var maxtime = new Date(req.query.departure_date);
        maxtime.setHours(maxtime.getHours()+1);
        //console.log(maxtime)
     const result=await flightmodel.find({ departure_time: { $gte: currenttime, $lte: maxtime } });
        res.status(200).send(result);
    
    //await flightmodel.find({departure_date:req.query.departure_date,departure_time:req.query.departure_time})

    }
    catch(error)
    {
        console.log(error)
        return res.status(500).json({ message: 'Server error' });
    }
}
const booktickets=async(req,res)=>
{
    const{booked_date,no_of_tickets,price,user_id,flight_id}=req.body
    try
    {
        console.log(req.body)
        const result=await flightmodel.findById({_id:flight_id})
        if(result.availableseats>=no_of_tickets)
        {
        const newbooking=new bookingmodel(
            {
                booked_date,
                no_of_tickets,
                price,
                user_id,
                flight_id
            })
        await  newbooking.save()
        await flightmodel.findByIdAndUpdate({_id:flight_id},{availableseats:result.availableseats-no_of_tickets})
        return res.status(201).json({ message: 'Flight Booked successfully' });
        }
        else
        {
            return res.status(409).json({ message: 'No of seats overlimit' });
        }
    }
    catch(error)
    {
            console.log(error)
            return res.status(500).json({ message: 'Server error' });

    }
}
const mybooking=async(req,res)=>
{
    try
    {
       const result= await bookingmodel.find({user_id:req.query.user_id})
       //const flight_details=await flightmodel.findById({_id:result.flight_id})
       //console.log(result)
       res.status(200).json(result)
    }
    catch(error)
    {
        console.log(error)
        return res.status(500).json({ message: 'Server error' });
    }
}
module.exports=
{
    getflight,
    booktickets,
    mybooking
}