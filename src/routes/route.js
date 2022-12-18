const express =require('express');
const router= express.Router();
const controller =require('../controllers/user')

//router.get('/login',controller);
router.get('/sign-up',(req,res)=>{
    res.render('./sign-up.ejs')
})
router.get('/login',(req,res)=>{
    res.render('./login.ejs')
})
router.post('/signupdata',controller.signup)

module.exports=router;