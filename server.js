'use strict';

// Configuring Express server
const express = require("express");
const mongoose = require("mongoose");
const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(express.json());


// Connecting to MongoDB
const mongoURI = process.env.MONGODB_URI || "mongodb+srv://stadmin:STAdmin@skilltraders.kb2nk.mongodb.net/SkillTraders?retryWrites=true&w=majority";
mongoose.connect(mongoURI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
}).then(() => {
	console.log("Successfully connected to MongoDB.");
}).catch((error) => {
	console.log(error);
});


server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Routing API endpoints
const categoryEndpoint = require("./endpoints/Category");
const categoriesEndpoint = require("./endpoints/Categories");
const conversationsEndpoint = require("./endpoints/Conversations");
const imageEndpoint = require("./endpoints/Image");
const messageEndpoint = require("./endpoints/Message");
const messagesEndpoint = require("./endpoints/Messages");
const postingEndpoint = require("./endpoints/Posting");
const postingsEndpoint = require("./endpoints/Postings");
const reviewEndpoint = require("./endpoints/Review");
const reviewsEndpoint = require("./endpoints/Reviews");
const userEndpoint = require("./endpoints/User");
const usersEndpoint = require("./endpoints/Users");
server.use("/api/category", categoryEndpoint);
server.use("/api/categories", categoriesEndpoint);
server.use("/api/conversations", conversationsEndpoint);
server.use("/api/image", imageEndpoint);
server.use("/api/message", messageEndpoint);
server.use("/api/messages", messagesEndpoint);
server.use("/api/posting", postingEndpoint);
server.use("/api/postings", postingsEndpoint);
server.use("/api/review", reviewEndpoint);
server.use("/api/reviews", reviewsEndpoint);
server.use("/api/user", userEndpoint);
server.use("/api/users", usersEndpoint);

// TODO: I WILL SET THIS UP AFTER FRONTEND IS IN PROD STAGE
// Routing non-API URLs to frontend
server.use(express.static(__dirname + "/client/build"));
server.get("*", (req, res) => {
    res.sendFile(__dirname + "/client/build/index.html");
});


// Configuring socket server
const http = require("http").createServer(server);
const io = require("socket.io")(http);
io.on("connection", (socket) => {
	console.log("User connected");
	socket.on("disconnect", () => {
		console.log("User disconnected")
	});
	socket.on("message", (message) => {
		io.emit("message", message);
		console.log(message);
	});
});

// Starting server
const port = process.env.PORT || 5000;
http.listen(port, () => {
	console.log(`Server started on port ${port}.`);
});