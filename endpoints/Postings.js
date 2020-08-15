const express = require("express");
const Posting = require("../models/Posting");
const { ObjectID } = require('mongodb')
const mongoose = require("mongoose");

const router = express.Router();
const log = console.log

/**
* Get all postings by user with id <id> or belonging to a category with id <id>
*/
router.get("/:id", (req, res) => {
    const id = req.params.id
    if (!ObjectID.isValid(id)) {
        res.status(404).send('Resource not found')
        return;
    }

    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    }

    Posting.find({"userId": id}).then((result) => {
    if (!result) {
        res.status(404).send('Resource not found')
    } else {
        if (result.length > 0){
            res.send(result);
        } else {
            Posting.find({"categories": id}).then((result) => {
            if (!result) {
                res.status(404).send('Resource not found')
            } else {
                res.send(result);
            }
            }).catch((error) => {
                res.sendStatus(500);
            });
        }
    }
    }).catch((error) => {
        res.sendStatus(500);
    });
})


module.exports = router;