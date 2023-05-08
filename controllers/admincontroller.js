const flightmodel = require('../database/Flightmodel');
const bookingmodel=require('../database/Bookingmodel');
const Usermodel=require('../database/Usermodel')
const getallflights=async(req,res)=>
{
  try{
    const result=await flightmodel.find({})
    console.log(result)
    res.status(200).send(result)
  }
  catch (error) 
  {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}
const addflight = async (req, res) => {
  try {
    console.log(req.body)
    var {flight_no,flight_name,start_location,destination_location,availableseats,landing_date,landing_time,departure_date,departure_time,price} = req.body;
    departure_date=new Date(departure_date)
    departure_time=new Date(departure_date)

    landing_date=new Date(landing_date)
    landing_time=new Date(landing_date)

    // validate input
    if (!flight_no || !flight_name || !departure_date || !departure_time) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // create new flight object
    const newFlight = new flightmodel({
      flight_no,
      flight_name,
      start_location,
      destination_location,
      availableseats,
      landing_date,
      landing_time,
      departure_date,
      departure_time,
      price
    });

    // save the new flight object to the database
    await newFlight.save();

    // return success message
    return res.status(201).json({ message: 'Flight added successfully' });
  } 
  catch (error) 
  {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};
const deleteflight=async(req,res)=>
{
  try
  {
    const {id} = req.params
    await flightmodel.findByIdAndDelete(id);
    return res.status(200).json({message:'Flight Deleted Sucessfully'});
  }
  catch(error)
  {
    return res.status(500).json({ message: 'Server error' })
  }
}
const getflights=async(req,res)=>
{
  try
  {
    let arr1=[];
    result=await flightmodel.find({});
    for(let x=0;x<result.length;x++)
    {
      console.log(result[x])
      var ans=await bookingmodel.find({"flight_id":result[x]._id})
      let arr=[]; 
      for(let y=0;y<ans.length;y++)
      {
       console.log(ans[y])
         var res1=await Usermodel.findById(ans[y].user_id) ;
         console.log(res1);
        arr.push({"departure_date":result[x].departure_date,"departure_time":result[x].departure_time,"flight_no":result[x].flight_no,"flight_name":result[x].flight_name,"user_name":res1.user_name,"no_of_tickets":ans[y].no_of_tickets})
      }
      if(arr.length>0)
      {
      arr1.push(arr)
      }
    }
    res.status(200).json(arr1)
  }
  catch(error)
  {
    console.log(error)
    return res.status(500).json({ message: 'Server error' })
  }
}

const patchflight = async(req,res)=>{
  try {
    var {flight_no,flight_name,start_location,destination_location,availableseats,landing_date,landing_time,departure_date,departure_time,price} = req.body;

    departure_date=new Date(departure_date)
    departure_time=new Date(departure_date)

    landing_date=new Date(landing_date)
    landing_time=new Date(landing_date)
    const {id} = req.params
    console.log(id,req.body)
    const updated = await flightmodel.findByIdAndUpdate(id, {flight_no,flight_name,start_location,destination_location,availableseats,landing_date,landing_time,departure_date,departure_time,price},{new:true})
   return  res.status(200).json({updated})



    
    
  } catch (error) {
    return res.status(500).json({ message: 'Server error' })

    
  }
}
const adminlogin= (req,res)=>
{
  if(req.body.email=="santhosha.20cse@kongu.edu" && req.body.password=="12345678")
  {
    res.status(200).send("Success")
  }
  else
  {
    res.status(401).send("InvalidUser")
  }
}

module.exports = { addflight,
deleteflight,
getallflights ,
getflights,
patchflight,
adminlogin};
