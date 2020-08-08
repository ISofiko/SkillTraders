const mongoose = require("mongoose");
const { ObjectID } = require('mongodb')

const schema = new mongoose.Schema({
	categories: [ObjectID],
	userId: ObjectID,
	title: String,
	timestamp: Date,
	price: Number,
	numSessions: Number,
	content: String,
	meetingLink: String
});

module.exports = mongoose.model("Posting", schema);