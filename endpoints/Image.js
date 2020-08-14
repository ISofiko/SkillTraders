const express = require("express");
const router = express.Router();
const multipart = require("connect-multiparty")();
const cloudinary = require("cloudinary");
cloudinary.config({
	cloud_name: "dhe9nx9u9",
	api_key: "684229585576132",
	api_secret: "ufT37jgIuhb-yo8-81451H2f49k"
});

const Image = require("../models/Image");

router.post("/", multipart, (req, res) => {
	/*
	cloudinary.uploader.upload(req.files.image.path, (uploaded) => {
		const image = new Image({
			public_id: uploaded.public_id,
			url: uploaded.url
		});
		image.save().then((result) => {
			res.send(result);
		}).catch((error) => {
			res.sendStatus(500);
		});
	});
	*/
	console.log("Received")
});

router.get("/:image_id", (req, res) => {
	const { image_id } = req.params;
	Image.findById(image_id).then((result) => {
		res.send(result);
	}).catch((error) => {
		res.sendStatus(500);
	});
});

module.exports = router;