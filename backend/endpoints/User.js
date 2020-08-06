const express = require("express");
const User = require("../models/User");
const { ObjectID } = require('mongodb')
const mongoose = require("mongoose");

const router = express.Router();

// get user info by id
router.get("/:id", (req, res) => {
    const id = req.params.id
    if (!ObjectID.isValid(id)) {
        res.status(404).send()
        return;
    }

    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    }

    User.findById(id).then((result) => {
    if (!result) {
        res.status(404).send('Resource not found')
    } else {
        res.send(result);
    }
    }).catch((error) => {
        res.sendStatus(500);
    });
})


// this is to update a user
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
            result.salt = req.body.salt ? req.body.salt : result.salt
            result.email = req.body.email ? req.body.email : result.email
            result.admin = req.body.admin ? req.body.admin : result.admin
            result.bio = req.body.bio ? req.body.bio : result.bio
            result.avgRating = req.body.avgRating ? req.body.avgRating : result.avgRating
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