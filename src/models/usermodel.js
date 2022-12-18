const mongoose =require('mongoose')

const userschema= new mongoose.Schema({
    userid:String,
    username:String,
    passward:String,
    utype:String
})

module.exports= mongoose.model('User',userschema)