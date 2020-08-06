const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	category: ObjectId,
	username: {type: String, unique: true, required : true},
	title: String,
	timestamp: Date,
	price: Number,
	numSessions: Number,
	content: String,
	meetingLink: String
});

module.exports = mongoose.model("Posting", schema);