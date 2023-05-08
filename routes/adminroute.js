const express=require('express')
const cors=require('cors')
const adminrouter=express.Router()
adminrouter.use(cors())
const {addflight,deleteflight,getallflights,getflights,patchflight,adminlogin}=require('../controllers/admincontroller')
adminrouter.route('/flight').post(addflight).get(getallflights)
adminrouter.route('/flight/:id').patch(patchflight).delete(deleteflight)
adminrouter.route('/getflights').get(getflights)
adminrouter.route('/adminlogin').post(adminlogin)
module.exports=adminrouter