const express=require('express')
const cors=require('cors')
const adminrouter=express.Router()
adminrouter.use(cors())
const {addflight,deleteflight,getallflights}=require('../controllers/admincontroller')
adminrouter.route('/flight').post(addflight).delete(deleteflight).get(getallflights)
module.exports=adminrouter