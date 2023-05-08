const express=require('express')
const cors=require('cors')
const adminrouter=express.Router()
adminrouter.use(cors())
const {addflight,deleteflight,getallflights,getflights,patchflight}=require('../controllers/admincontroller')
adminrouter.route('/flight').post(addflight).get(getallflights)
adminrouter.route('/flight/:id').patch(patchflight).delete(deleteflight)
adminrouter.route('/getflights').get(getflights)
module.exports=adminrouter