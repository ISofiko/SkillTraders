const mongoose = require("mongoose");
const { ObjectID } = require('mongodb');

const schema = new mongoose.Schema({
	conversation: ObjectID,
	sender: ObjectID,
	timestamp: Date,
	content: String
});

module.exports = mongoose.model("Message", schema);