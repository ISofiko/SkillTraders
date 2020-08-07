const express = require("express");
const Review = require("../models/Review");
const User = require("../models/User");
const { ObjectID } = require('mongodb')
const mongoose = require("mongoose");

const router = express.Router();
const log = console.log


/**
* Get review with id <id>
*/
router.get("/:id", (req, res) => {
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

    Review.findById(id).then((result) => {
    if (!result) {
        res.status(404).send('Resource not found')
    } else {
        res.send(result);
    }
    }).catch((error) => {
        res.sendStatus(500);
    });
})


/**
* Creating a new review for user with id <user_id>
*/
router.post("/", (req, res) => {
	// check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    }

    // updates user avg review in user model
    User.findById(req.body.userId).then((user) => {
        const oldRatingSum = user.numRatings * user.avgRating
        const newNumRatings = user.numRatings + 1
        user.numRatings = newNumRatings
        user.avgRating = (oldRatingSum + req.body.rating) / newNumRatings
        user.save()
    })

    // adds the review entry
    const review = new Review({
        userId: req.body.userId,
    	reviewer: req.body.reviewer,
    	rating: req.body.rating,
    	content: req.body.content
    })

    review.save().then((result) => {
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
* Delete review with id <id>
*/
router.delete("/:id", (req, res) => {
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

    Review.findOneAndDelete({"_id": id}).then((result) => {
    if (!result) {
        res.status(404).send('Resource not found')
    } else {
        res.send(result);
    }
    }).catch((error) => {
        res.sendStatus(500);
    });
})


module.exports = router;

