const mongoose = require('mongoose');
const EventModel = require('./models/Events');
const UserModel = require('./models/Users');
const express = require("express")
const app = express();


const cors = require("cors");
app.use(express.json());
app.use(cors());


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/thriftDB');
}

app.get("/events", (req,res) =>{
    EventModel.find({}).then((err,result) => {
        if(err){
            console.log("11111111111111111")
            console.log(err);
           
        }else{
            res.json(result);
            console.log("rrrrrr")
        }
    } )
      
    
})

app.post("/user/signup",(req,res) =>{
    const user = req.body;
    const newUser = new UserModel(user);
    newUser.save();

    res.json(user);
})


app.listen("3001",()=>{
    console.log("YESSSSSA")
})