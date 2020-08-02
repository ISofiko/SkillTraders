const express = require("express");
const router = express.Router();

const Message = require("../models/Message");

router.get("/", (req, res) => {
	Message.find().then((result) => {
		res.send(result);
	}).catch((error) => {
		res.sendStatus(500);
	});
});

module.exports = router;