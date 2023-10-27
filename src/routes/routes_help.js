const express = require('express');
const router = express.Router();
const {Entercategory, fetchdeepData,deepdelete,} = require('../Controllor/index')
const {Entersubcategory,fetchTestData,Datadelete,} = require('../Controllor/index')
// const {Datadelete} = require('../Controllor/index')

router.post('/categoryenter',Entercategory);
router.get('/categoryenter',fetchdeepData);
router.delete('/categoryenter',deepdelete);


router.post('/enter',Entersubcategory);
router.get('/enter',fetchTestData);
router.delete('/enter',Datadelete);



module.exports = router;