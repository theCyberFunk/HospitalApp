var express     = require('express');
var router      = express.Router();
var User        = require("../models/user");
const passport  = require('passport');



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

router.post('/signup', function(req, res, next) {
  var newUser = new User({ 
    name: req.body.name, 
    email:req.body.email, 
    username: req.body.username, 
    date: req.body.date, 
    gender: req.body.gender,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country
  });
  User.register(newUser, req.body.password, (err, user)=>{
    if(err){
      console.log(err);
      return res.render('signup');
    }
    passport.authenticate("local")(req, res, ()=>{
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
  res.redirect("/");
});



// PROFILE
router.get('/profile', function(req, res, next) {
  res.render('profile' , {currentUser: req.user});
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



// TREATMENT
router.get('/treatment', function(req, res, next) {
  res.render('treatment' , {currentUser: req.user});
});



// CONTACT
router.get('/contact', function(req, res, next) {
  res.render('contact' , {currentUser: req.user});
});



// ABOUT
router.get('/about', function(req, res, next) {
  res.render('about' , {currentUser: req.user});
});



// FAQ
router.get('/faq', function(req, res, next) {
  res.render('faq' , {currentUser: req.user});
});



// QUERY
router.get('/query', function(req, res, next) {
  res.render('query' , {currentUser: req.user});
});

module.exports = router;
