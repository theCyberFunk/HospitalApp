var mongoose = require("mongoose");


module.exports = mongoose.model("Doctors", new mongoose.Schema({
    name: String,
    desg: String,
    dept : String,
    country : String,
    img: String
}));