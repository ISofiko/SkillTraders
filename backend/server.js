'use strict';

// Configuring Express server
const express = require("express");
const mongoose = require("mongoose");
const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(express.json());


// Connecting to MongoDB
const mongoURI = "mongodb+srv://stadmin:STAdmin@skilltraders.kb2nk.mongodb.net/<dbname>?retryWrites=true&w=majority";
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
const userEndpoint = require("./endpoints/UserEndpoint");
server.use("/api/message", messageEndpoint);
server.use("/api/user", userEndpoint);

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
	socket.on("chat message", (message) => {
		io.emit("chat message", message);
	});
});

// Starting server
const port = process.env.PORT || 5000;
http.listen(port, () => {
	console.log(`Chat server started on port ${port}.`);
});