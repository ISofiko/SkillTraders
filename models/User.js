const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	username: {type: String, unique: true, required : true},
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