const express = require('express')
const router = express.Router();

router.get('/' , (req , res)=>{
    res.render('./app/home')
})
router.get('/about' , (req , res)=>{
    res.render('./app/about')
})
router.get('/contact' , (req , res)=>{
    res.render('./app/contact')
})
router.get('/services' , (req , res)=>{
    res.render('./app/services')
})

module.exports = router;