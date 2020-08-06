var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: String,
    gender: String,
    date: Date,
    city: String,
    state: String,
    country: String,
});

UserSchema.plugin(passportLocalMongoose); //adds the methods to our user

module.exports = mongoose.model("User", UserSchema);