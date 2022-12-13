const express=require('express');
const cors=require('cors');
require('./db/config');
const User=require('./db/User');
const { response } = require('express');
const app=express();
const path=require('path');

app.use(cors());
app.use(express.json());
const PORT=process.env.PORT || 7789;

app.post('/register',async(req,res)=>{
    let user=new User(req.body)
    let result=await user.save();
    res.send(result);

})
app.get("*",(req,res)=>{
    res.sendFile(
        path.join(__dirname,"./Frontend/build/index.html"),
        function(err){
            if(err){
                res.status(500).send(err);
            }
        }
    )
})

app.listen(PORT);
