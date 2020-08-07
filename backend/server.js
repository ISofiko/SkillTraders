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

// Configuring socket server
const http = require("http").createServer(server);
const io = require("socket.io")(http);
io.on("connection", (socket) => {
	console.log("User connected");
	socket.on("disconnect", () => {
		console.log("User disconnected")
	});
	socket.on("message", (message) => {
		message.sender = "other";
		io.emit("message", message);
		console.log(message);
	});
});

// Starting server
http.listen(port, () => {
	console.log(`Chat server started on port ${port}.`);
});