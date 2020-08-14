const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	username: {type: String, unique: true, required : true},
    password: String,
    fname: String,
    lname: String,
    salt: String,
    email: String,
    admin: Boolean,
    avgRating: Number,
    numRatings: Number,
    reviewers: Array,
    firstLogin: Date,
    lastSeen: Date,
    image_url: String
});

module.exports = mongoose.model("User", schema);