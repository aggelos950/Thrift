const mongoose = require('mongoose');
const EventModel = require('./models/Events');
const UserModel = require('./models/Users');
const ReservationModel = require('./models/Reservation');
const CommentModel = require('./models/Comments');
const express = require("express")
const cors = require("cors");

const multer = require('multer')



const app = express();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname)
  },
})


const upload = multer({ storage })

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

app.get("/users/:username", (req,res) => {
    let username = req.params.username
    var users = UserModel.find({username});
    users.exec().then(function(response){
        res.json(response[0])
    }).catch((err)=>{
        console.log(err);
        res.json([]);
    })
})


app.get("/reservEvent/:eventId" , (req,res)=>{
  let _id = req.params.eventId;
  var event = EventModel.find({_id});
    event.exec().then(function(response){
      res.json(response[0]);
    }).catch((err)=>{
      console.log(err);
      res.json([]);
  })
})

app.get("/users", (req,res) => {
   var users = UserModel.find({});
   users.exec().then(function(response){
     res.json(response)
   }).catch((err)=>{
     console.log(err);
     res.json([]);
   })
})


app.post("/users", (req,res) => {
   var loginUser = req.body.loginUser;

   var conditions = {
     username:loginUser
   }
   
   var update = {
        username : req.body.username,
        email : req.body.email,
        password : req.body.password
   }

    UserModel.findOneAndUpdate(conditions,update,{new: true}).then(function(result){
        res.json(result);
      });
})

app.post("/userUpdate",(req,res)=>{
  var userId = req.body.id;

  var conditions = {
    _id:userId
  }

  var update = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }

  UserModel.findOneAndUpdate(conditions,update,{new: true}).then(function(result){
    res.json(result);
  });
})

app.post("/eventUpdate",(req,res)=>{
   var eventId = req.body.id;

   var conditions = {
    _id:eventId
   }

   var update = {
       title: req.body.title,
       date: req.body.date,
       description: req.body.desc,
       passed: req.body.passed
   }


   EventModel.findOneAndUpdate(conditions,update,{new: true}).then(function(result){
    res.json(result);
   })
})

app.post("/updateImage",upload.single("image"),(req,res)=>{
    var eventId = req.body.id;

    var conditions = {
    _id:eventId
    }

    var update = {
      src:req.file.filename
    }

    EventModel.findOneAndUpdate(conditions,update,{new: true}).then(function(result){
      res.json(result);
     })

})



app.post("/newUserAdmin",(req,res)=>{
  const user = req.body;
  const newUserAdmin = new UserModel(user);
  newUserAdmin.save();

  res.json(user);

})


app.post("/newEventAdmin",upload.single('image'),(req,res) =>{
  const event = req.body;
  const newEvent = new EventModel({
    src:req.file.filename,
    title:event.title,
    date:event.date,
    description:event.desc,
    passed:event.passed
  })
  newEvent.save();

  res.json(newEvent);
})


app.post("/userDelete",(req,res)=>{
  var userDelete = req.body.id;
  UserModel.deleteOne({_id:userDelete}).then(function(result){
    res.json(result);
  })
})

app.post("/eventDelete",(req,res)=>{
  var eventDelete = req.body.id;
  EventModel.deleteOne({_id:eventDelete}).then(function(result){
    res.json(result);
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

app.post("/comments",upload.single('image'),(req,res) =>{
  const comment = req.body;
  
  const newComment = new CommentModel({
    user:comment.user,
    event:comment.eventId,
    src:req.file.filename,
    commentText:comment.formComment
  });

  newComment.save()

  res.json(newComment);
})

app.get("/comments/:eventId",(req,res)=>{
  let eventId = req.params.eventId
  var comments = CommentModel.find({event:eventId});
  comments.exec().then(function(response){
    res.json(response)
  }).catch((err)=>{
    console.log(err);
    res.json([]);
  })
})


app.get("/allowOneComment", async(req,res) => {
  let eventId = req.query.evenId;
  let user = req.query.user;

  var madeReservation = ReservationModel.find({event_id:eventId,username:user});
  const hasMadeReservation = await madeReservation.exec();

  var isThereOneComment = CommentModel.find({event:eventId,user:user});
  const hasCommented = await isThereOneComment.exec();
  

  const boolHasCommented = hasCommented.length!==0
  const boolHasMadeReservation = hasMadeReservation.length!==0

  if(boolHasCommented===false && boolHasMadeReservation===true) {
    res.json(true);
  }else{
    res.json(false)
  }

})


app.get("/reservations",(req,res)=>{
  var reservations = ReservationModel.find({});
  reservations.exec().then(function(response){
    res.json(response)
  }).catch((err)=>{
    console.log(err);
    res.json([]);
  })
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