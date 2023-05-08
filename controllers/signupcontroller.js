const UserModel=require('../database/Usermodel')
 const bcrypt=require('bcrypt')
const createuser= async (req,res)=>
{
    try
    {
  var {user_name,password,phone_number,email}=req.body
    const salt=await bcrypt.genSalt(10);
    password= await bcrypt.hash(password,salt);
   const usermodel=new UserModel({user_name,password,phone_number,email})
    await usermodel.save()
    return res.status(201).json({ message: 'User created successfully' });
    }
    catch (error) 
    {
      console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
}
const loginuser=async (req,res)=>
{
  try
  {
  result=await UserModel.findOne({email:req.body.email})
  if(result)
  {
  const password=result.password
  console.log(password,req.body.password)
  const flag=await  bcrypt.compare(req.body.password,password)
      if(flag)
      {
          res.status(200).send({id:result._id,msg:"Successfully Logged in"})
      }
      else
      {
          res.status(401).send({ message: 'Invalid Password' });

      }
  }
  else
  {
      res.status(401).send({ message: 'Invalid User' });
  }
  }
  catch(err)
  {
    console.log(err)
    return res.status(500).json({ message: 'Server error' });
  }
}
module.exports={createuser,loginuser};