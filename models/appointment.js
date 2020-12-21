var mongoose = require("mongoose");


module.exports = mongoose.model("Appointment", new mongoose.Schema({
    date: Date,
    time: String,
    status: String,
    img: String,
    details: String
}));