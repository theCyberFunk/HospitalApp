var mongoose = require("mongoose");

var AppointmentSchema = new mongoose.Schema({
    date: Date,
    time: String,
    status: String,
    img: String,
    details: String
});

module.exports = mongoose.model("Appointment", AppointmentSchema);