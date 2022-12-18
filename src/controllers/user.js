const usermodel= require('../models/usermodel')


const signup = async (req,res)=>{
    body=req.body;
    const usecreate= await usermodel.create(body);
    res.redirect('/login')
}


module.exports={signup}