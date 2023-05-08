const express=require('express')
const userrouter=express.Router()
const cors=require('cors')
const{getflight,booktickets,mybooking}=require("../controllers/usercontroller")
const {createuser,loginuser}=require("../controllers/signupcontroller")
userrouter.use(cors())
userrouter.route('/getflight').get(getflight)
userrouter.route('/booktickets').post(booktickets)
userrouter.route('/mybooking').get(mybooking)
userrouter.route('/signup').post(createuser)
userrouter.route('/login').post(loginuser)





module.exports=userrouter;