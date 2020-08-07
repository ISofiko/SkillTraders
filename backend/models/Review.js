const mongoose = require("mongoose");
const { ObjectID } = require('mongodb')

const schema = new mongoose.Schema({
	userId: ObjectID,
	reviewer: ObjectID,
	rating: Number,
	content: String
});

module.exports = mongoose.model("Review", schema);