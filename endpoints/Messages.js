const express = require("express");
const router = express.Router();

const Message = require("../models/Message");

router.get("/:conversation_id", (req, res) => {
	const { conversation_id } = req.params;
	Message.find({ conversation: conversation_id }).then((result) => {
		res.send(result);
	}).catch((error) => {
		res.sendStatus(500);
	});
});

router.post("/:conversation_id", (req, res) => {
	const { conversation_id } = req.params;
	const message = new Message({
		conversation: conversation_id,
		sender: req.body.sender,
		timestamp: new Date(),
		content: req.body.content
	});
	message.save().then((result) => {
		res.send(result);
	}).catch((error) => {
		res.sendStatus(500);
	});
});

module.exports = router;