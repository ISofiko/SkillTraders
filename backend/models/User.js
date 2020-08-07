const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	username: String,
    password: String,
    salt: String,
    email: String,
    admin: Boolean,
    bio: String,
    avgRating: Number,
    numRatings: Number,
    firstLogin: Date,
    lastSeen: Date
});

module.exports = mongoose.model("User", schema);