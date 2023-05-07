const flightmodel = require('../database/Flightmodel');

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
    await flightmodel.findByIdAndDelete({_id:req.body.id});
    return res.status(200).json({message:'Flight Deleted Sucessfully'});
  }
  catch(error)
  {
    return res.status(500).json({ message: 'Server error' })
  }
}

module.exports = { addflight,
deleteflight,
getallflights };
