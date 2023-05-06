const flightmodel = require('../database/Flightmodel');

const addflight = async (req, res) => {
  try {
    console.log(req.body)
    const {flight_no,flight_name,start_location,destination_location,availableseats,arrival_time,date,departure_time} = req.body;

    // validate input
    if (!flight_no || !flight_name || !date || !departure_time) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // create new flight object
    const newFlight = new flightmodel({
      flight_no,
      flight_name,
      start_location,
      destination_location,
      availableseats,
      arrival_time,
      departure_time,
      date,
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
deleteflight };
