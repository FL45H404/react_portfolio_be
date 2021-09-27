const express=require('express')
const router=express.Router();
const {send}=require('../controller/contactControl')


router.post('/contact',send);

module.exports=router;