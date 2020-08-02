'use strict';

// Configuring Express server
const express = require("express");
const server = express();
const port = process.env.PORT || 5000;
const parser = require("body-parser");
server.use(parser.json());

// Connecting to MongoDB
const mongoose = require("mongoose");
// Replace with MongoDB Atlas URI in the future
const mongoURI = "mongodb://localhost:27017/SkillTraders";
mongoose.connect(mongoURI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
}).then(() => {
	console.log("Successfully connected to MongoDB.");
}).catch((error) => {
	console.log(error);
});

// Routing API endpoints
const messageEndpoint = require("./endpoints/MessageEndpoint");
server.use("/api/message", messageEndpoint);

// TODO: I WILL SET THIS UP AFTER FRONTEND IS IN PROD STAGE
// Routing non-API URLs to frontend
/*
server.use(express.static("../frontend/build"));
server.get("*", (req, res) => {
	res.sendFile("index.html", { root: __dirname });
});
*/

// Starting server
server.listen(port, () => {
	console.log(`Server started on port ${port}.`);
});