const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	public_id: String,
	url: String
});

module.exports = mongoose.model("Category", schema);