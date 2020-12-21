var mongoose = require("mongoose");


module.exports = mongoose.model("Hospitals", new mongoose.Schema({
    name: String,
    img: String
}));