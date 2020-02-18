const express =require('express');
const app=express();


const controller = require('./controller');
const router =express.Router();

router.post('/strongestDigit',controller.getStrongestDigit);






module.exports = router;