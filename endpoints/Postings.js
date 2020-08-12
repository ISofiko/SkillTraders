const express = require("express");
const Posting = require("../models/Posting");
const { ObjectID } = require('mongodb')
const mongoose = require("mongoose");

const router = express.Router();
const log = console.log

/**
* Get all postings by user with id <user_id>
*/
router.get("/:user_id", (req, res) => {
    const user_id = req.params.user_id
    if (!ObjectID.isValid(user_id)) {
        res.status(404).send()
        return;
    }

    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    }

    Posting.find({"userId": user_id}).then((result) => {
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
* Get all postings for category with id <id>
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

    // TODO: apparently can find document where array contains id, verify this.
    Posting.find({"categories": id}).then((result) => {
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