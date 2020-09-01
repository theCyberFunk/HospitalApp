var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: String,
    gender: String,
    dob: Date,
    city: String,
    state: String,
    country: String,
    image:String,
    auth: String,
    messages: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Message"
    }],
    appointments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment"
    }]
});

UserSchema.plugin(passportLocalMongoose); //adds the methods to our user

module.exports = mongoose.model("User", UserSchema);