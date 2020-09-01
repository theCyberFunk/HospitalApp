var multer      = require('multer');

var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that.");
    res.redirect("/login");

}

// multer config
var storage = multer.diskStorage({ 
    destination: (req, file, cb) => { 
      cb(null, './public/uploads/'); 
    },
    filename: (req, file, cb) => { 
        cb(null, new Date().toISOString() + file.originalname); 
      } 
  }); 
  
middlewareObj.upload = multer({ storage: storage });



module.exports = middlewareObj;