const express = require("express");
const User = require("../models/User");
const { ObjectID } = require('mongodb')
const mongoose = require("mongoose");

const router = express.Router();


router.get("/", (req, res) => {
    User.find().then((result) => {
        res.send(result);
    }).catch((error) => {
        res.sendStatus(500);
    });
})

router.post("/", (req, res) => {
	// check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    }

    // Create a new student using the Student mongoose model
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        salt: req.body.salt,
        email: req.body.email,
        admin: req.body.admin,
        bio: req.body.bio,
        avgRating: req.body.avgRating,
        firstLogin: new Date(),
        lastSeen: new Date()
    })


    // Save user to the database
    user.save().then((result) => {
        res.send(result)
    }).catch((error) => {
        if (isMongoError(error)) { // check for if mongo server suddenly disconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            log(error)
            res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
        }
    })
});


module.exports = router;