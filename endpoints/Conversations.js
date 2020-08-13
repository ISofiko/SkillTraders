const express = require("express");
const router = express.Router();

const Conversation = require("../models/Conversation");

router.post("/", (req, res) => {
	const conversation = new Conversation({
		participants: req.body.participants,
		messages: []
	});
	conversation.save().then((result) => {
		res.send(result);
	}).catch((error) => {
		res.sendStatus(500);
	})
});

router.get("/:user_id", (req, res) => {
	const { user_id } = req.params;
	Conversation.find({ participants: user_id }).then((result) => {
		res.send(result);
	}).catch((error) => {
		res.sendStatus(500);
	});
});

module.exports = router;