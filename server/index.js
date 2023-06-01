const mongoose = require('mongoose');
const EventModel = require('./models/Events');
const UserModel = require('./models/Users');
const ReservationModel = require('./models/Reservation');
const express = require("express")
const cors = require("cors");
const app = express();

app.use("/images",express.static("images"));

app.use(express.json());
app.use(cors());


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/thriftDB');
}


app.get("/events", (req,res) =>{
   var events = EventModel.find({});
   events.exec().then(function(response){
    
    res.json(response)
  }).catch((err)=>{
    console.log(err);
    res.json([]);
  })
})


app.post("/user/signup",(req,res) =>{
    const user = req.body;
    const newUser = new UserModel(user);
    newUser.save();

    res.json(user);
})


app.post("/user", async (req,res) => {
    const user = await UserModel.findOne({
        username: req.body.username,
        password: req.body.password,
    })

    if (user) {
        return res.json(true);
    }else {
        return res.json(false);
    }
})



app.post("/events",(req,res) =>{
    const reserv = req.body;
    const newReserv = new ReservationModel(reserv)
    newReserv.save();

    res.json(reserv);
})


app.listen("3001",()=>{
    console.log("YESSSSSA")
})