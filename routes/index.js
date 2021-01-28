const passport      = require('passport');
const express       = require('express');
const router        = express.Router();
const middleware    = require("../middleware");
const User          = require("../models/user");
const Message       = require("../models/message");
const Appointment   = require("../models/appointment");
const Doctor        = require("../models/doctors");
const Hospital      = require("../models/hospitals");


// INDEX
router.get('/', function(req, res, next) {
  // console.log("currrent user: ", req.user);
  res.render('index' , {currentUser: req.user});
  
});
router.post('/', function(req, res, next) {
  res.redirect('/hospitals');
  // console.log("search: ", req.body.search);
  // console.log("location: ", req.body.location)
});



// SIGNUP
router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/signup', middleware.upload.single('image'), function(req, res, next) {
  var newUser = new User({ 
    name: req.body.name, 
    email:req.body.email, 
    username: req.body.username, 
    dob: req.body.date,
    gender: req.body.gender,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    image: req.file.path.slice(7),
    auth: "user"
  });
  User.register(newUser, req.body.password, (err, user)=>{
    if(err){
      console.log(err);
      req.flash('error', 'Registration Unsuccessful.');
      return res.render('signup');
    }
    passport.authenticate("local")(req, res, ()=>{
      req.flash('success', 'You have been successfully registered.');
      res.redirect('/');
    });
  });
});



// LOGIN
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', passport.authenticate("local", 
    {
      successRedirect: '/', 
      failureRedirect: '/login' 
  }), function(req, res, next){
});



// LOGOUT
router.get("/logout", function(req, res){
  req.logout(); // part of the packages
  req.flash('success', 'Logged you out.');
  res.redirect("/");
});



// PROFILE
router.get('/profile', middleware.isLoggedIn ,  function(req, res, next) {
  
  if(req.user.auth === "admin"){
    
    let alldata = [];
    
    const getdata = (Collection) => {
      return Collection.find({},function (err, data){ 
        if (err) {
          console.log(err);
        } else {
          alldata.push(data)
        }
      })
    }
      
    const setdata = async () => {
      try{
        await getdata(Message)
        await getdata(User)
        await getdata(Appointment)
        res.render('profile', {currentUser: req.user, messages:alldata[0], users:alldata[1], appointments:alldata[2]})
      } catch (e) {
          console.error(e);
      }
    }
    setdata();
  }
  
  if(req.user.auth === "user"){
    User.findOne({email: req.user.email}).populate('messages').populate('appointments').exec(function (err, user){ 
      if (err) {
        console.log(err);
      } else {
        res.render('profile' , {currentUser: req.user, messages:user.messages, appointments:user.appointments});
      }
    });
  }

});


// DOCTORS
router.get('/doctors', function(req, res, next) {
  res.render('doctors' , {currentUser: req.user});
});


// HOSPITALS
router.get('/hospitals', function(req, res, next) {
  res.render('hospitals' , {currentUser: req.user});
});



// APPOINTMENT
router.get('/appointment', function(req, res, next) {
  res.render('appointment' , {currentUser: req.user});
});
router.post('/appointment', middleware.isLoggedIn , middleware.upload.single('image'), function(req, res, next) {
  
  var newAppointment = new Appointment({ 
    date:     req.body.date, 
    time:     req.body.time,
    status:   req.body.status,
    img:      req.file.path.slice(7),
    details:  req.body.details
  });
  Appointment.create(newAppointment, function(err,appointment){
    if(err){
      res.redirect('/');
    } else{
      User.findOne({email: req.user.email}, function(err, user){
        if(err){
          console.log(err);
        } else{
          user.appointments.push(appointment);
          user.save(function(err){
            if(err){
              console.log(err);
            }
          })
        }
      })
      req.flash('success', 'Your appointment has been fixed.');
      res.redirect("/profile")
    }
  });
});



// TREATMENT
router.get('/treatment', function(req, res, next) {
  res.render('treatment' , {currentUser: req.user});
});



// CONTACT
router.get('/contact', function(req, res, next) {
  res.render('contact' , {currentUser: req.user});
});
router.post('/contact', middleware.isLoggedIn , function(req, res, next) {
  var newMessage = new Message({ 
    name:     req.body.name, 
    email:    req.body.email,
    subject:  req.body.subject,
    message:  req.body.message
  });
  Message.create(newMessage, function(err, message){
    if(err){
      res.redirect('/');
    } else{
      User.findOne({email: req.user.email}, function(err, user){
        if(err){
          console.log(err);
        } else{
          user.messages.push(message);
          user.save(function(err){
            if(err){
              console.log(err);
            } 
          })
        }
      })
      req.flash('success', 'We have recieved your message.');
      res.redirect("/profile")
    }
  });
});


// ABOUT
router.get('/about', function(req, res, next) {
  res.render('about' , {currentUser: req.user});
});



// FAQ
router.get('/faq', function(req, res, next) {
  res.render('faq' , {currentUser: req.user});
});


module.exports = router;








// TEST ROUTE
router.get('/test', function(req, res, next) {
  
  // User.find({name: "Aditya"}).populate('messages').populate('appointments').exec(function(err, user){
  //   console.log(user.messages);
  //   res.render("test", {user:user})
  // })
  Doctor.find({}, (err, doctors)=>{
    // res.render("test", { data : doctors });
    res.json( doctors );
  })
});