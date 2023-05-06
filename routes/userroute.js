const express=require('express')
const userrouter=express.Router()
const{getflight,booktickets,mybooking}=require("../controllers/usercontroller")
userrouter.route('/getflight').get(getflight)
userrouter.route('/booktickets').post(booktickets)
userrouter.route('/mybooking').get(mybooking)

module.exports=userrouter;