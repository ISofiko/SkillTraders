const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	userId: ObjectId,
	reviewer: ObjectId,
	rating: Number,
	content: String
});

module.exports = mongoose.model("Review", schema);