const express = require('express');
const router = express.Router();
const { userAdd, userfind, userDelete, userUpdate } = require('../controller/main');


router.get('/',(req,res)=>{
    res.send("hello in mongoDb");
})



 router.post('/login',userAdd)
 router.post('/update',userUpdate)
 router.get('/find',userfind)
 router.get('/delete',userDelete)


module.exports = router;
