const express = require("express");
const User = require("../models/User");
const Review = require("../models/Review");
const { ObjectID } = require('mongodb')
const mongoose = require("mongoose");

const router = express.Router();
const log = console.log


/**
* Creating a new user
*/
router.post("/", (req, res) => {
	// check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    }

    const user = new User({
        username: req.body.username,
        password: req.body.password,
        fname: req.body.fname,
        lname: req.body.lname,
        salt: "salt",
        email: req.body.email,
        admin: req.body.admin,
        avgRating: 0,
        numRatings: 0,
        reviewers:[],
        firstLogin: new Date(),
        lastSeen: new Date()
    })

    user.save().then((result) => {
        res.send(result)
    }).catch((error) => {
        if (isMongoError(error)) {
            res.status(500).send('Internal server error')
        } else {
            log(error)
            res.status(400).send('Bad Request')
        }
    })
});


/**
* Gets user info by username
*/
router.get("/:username", (req, res) => {
    const username = req.params.username

    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    }

    User.findOne({username: username}).then((result) => {
    if (!result) {
        res.status(404).send('Resource not found')
    } else {
        res.send(result);
    }
    }).catch((error) => {
        log(error)
        res.sendStatus(500);
    });
})


/**
* Update a user by id
*/
router.post("/:id", (req, res) => {
    const id = req.params.id
    if (!ObjectID.isValid(id)) {
        res.status(404).send()
        return;
    }

    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    }

    User.findById(id).then((result) => {
        if (!result) {
            res.status(404).send('Resource not found')
        } else {
            result.username = req.body.username ? req.body.username : result.username
            result.password = req.body.password ? req.body.password : result.password
            result.fname = req.body.fname ? req.body.fname : result.fname
            result.lname = req.body.lname ? req.body.lname : result.lname
            result.salt = req.body.salt ? req.body.salt : result.salt
            result.email = req.body.email ? req.body.email : result.email
            result.admin = false
            result.avgRating = req.body.avgRating ? req.body.avgRating : result.avgRating
            result.numRatings = req.body.numRatings ? req.body.numRatings : result.numRatings
            result.reviewers = req.body.reviewers ? req.body.reviewers : result.reviewers
            result.lastSeen = new Date()

            result.save().then((result) => {
                res.send(result)
            }).catch((error) => {
                if (isMongoError(error)) {
                    res.status(500).send('Internal server error')
                } else {
                    log(error)
                    res.status(400).send('Bad Request')
                }
            })
        }
    })
});

router.delete("/:id", (req, res) => {
    const id = req.params.id

    // Remove all of this user's reviews
    Review.deleteMany({"userId": id})

    User.findByIdAndRemove(id).then((result) => {
        if (!result) {
            res.status(404).send()
        } else {
            res.send(result)
        }
    })
    .catch((error) => {
        res.status(500).send('Internal Server Error')
    })
})

module.exports = router;