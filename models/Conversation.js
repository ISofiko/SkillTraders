const mongoose = require("mongoose");
const { ObjectID } = require('mongodb');

const schema = new mongoose.Schema({
	participants: [ObjectID],
	messages: [ObjectID]
});

module.exports = mongoose.model("Conversation", schema);