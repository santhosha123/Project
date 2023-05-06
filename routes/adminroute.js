const express=require('express')
const router=express.Router()
const {addflight,deleteflight}=require('../controllers/admincontroller')
router.route('/flight').post(addflight).delete(deleteflight)

module.exports=router