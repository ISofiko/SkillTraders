const express = require("express");
const router = express.Router();

const Message = require("../models/Message");

router.get("/:message_id", (req, res) => {
	const { message_id } = req.params;
	Message.findById(message_id).then((result) => {
		res.send(result);
	}).catch((error) => {
		res.sendStatus(500);
	});
});

module.exports = router;