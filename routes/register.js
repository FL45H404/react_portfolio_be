const express=require('express')
const router=express.Router();

const { addregister,login,logout }=require('../controller/registerControl');

router.post('/register',addregister);
router.post('/login',login)
router.get('/logout',logout)

module.exports=router;