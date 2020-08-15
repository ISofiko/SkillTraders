const express = require("express");
const Posting = require("../models/Posting");
const { ObjectID } = require('mongodb')
const mongoose = require("mongoose");

const router = express.Router();
const log = console.log


/**
* Get posting with id <id>
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

    Posting.findById(id).then((result) => {
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
* Creating a new posting
*/
router.post("/", (req, res) => {
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    }

    const posting = new Posting({
        categories: req.body.categories,
        userId: req.body.userId,
        title: req.body.title,
        timestamp: new Date(),
        price: req.body.price,
        avatar: req.body.avatar,
        numSessions: req.body.numSessions,
        content: req.body.content,
        meetingLink: req.body.meetingLink,
        image_url: req.body.image_url
    })

    posting.save().then((result) => {
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
* Update a posting by id
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

    Posting.findById(id).then((result) => {
        if (!result) {
            res.status(404).send('Resource not found')
        } else {
            result.categories = req.body.categories ? req.body.categories : result.categories
            result.userId = req.body.userId ? req.body.userId : result.userId
            result.title = req.body.title ? req.body.title : result.title
            result.timestamp = new Date()
            result.price = req.body.price ? req.body.price : result.price
            result.numSessions = req.body.numSessions ? req.body.numSessions : result.numSessions
            result.content = req.body.content ? req.body.content : result.content
            result.meetingLink = req.body.meetingLink ? req.body.meetingLink : result.meetingLink
            result.image_url = req.body.image_url ? req.body.image_url : result.image_url

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

/**
* Delete posting with id <id>
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

    Posting.findOneAndDelete({"_id": id}).then((result) => {
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

