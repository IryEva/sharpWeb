const path = require('path');

const express = require('express');

const router = express.Router();

router.get( '/contactUs', (req,res,next) => {
    res.sendFile(path.join(__dirname,'../','views','contactUs.html'));
});

router.post('/contactUs',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
} ); 

module.exports = router; 