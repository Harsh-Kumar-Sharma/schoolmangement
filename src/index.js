const express= require('express')
const app=express();
const mongoose=require('mongoose')
const route = require('./routes/route')


mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://harsh:7534981251@projectnode.rzqgdbx.mongodb.net/school", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.set("view engine",'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use('/', route)

app.listen(3000,()=>{console.log('Express run on 3000 portail')})