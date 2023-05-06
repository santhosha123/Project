const express=require('express')
const adminrouter=express.Router()
const {addflight,deleteflight}=require('../controllers/admincontroller')
adminrouter.route('/flight').post(addflight).delete(deleteflight)
module.exports=adminrouter