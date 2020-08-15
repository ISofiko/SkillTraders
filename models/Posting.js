const mongoose = require("mongoose");
const { ObjectID } = require('mongodb')

const schema = new mongoose.Schema({
	categories: Array,
	userId: String,
	title: String,
	timestamp: Date,
	price: Number,
	numSessions: Number,
	content: String,
	avatar: String,
	meetingLink: String,
	image_url: String
});

module.exports = mongoose.model("Posting", schema);