const express = require("express");
const Category = require("../models/Category");
const Posting = require("../models/Posting");
const { ObjectID } = require('mongodb')
const mongoose = require("mongoose");

const router = express.Router();
const log = console.log


/**
* Creating a new category
*/
router.post("/", (req, res) => {
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    }

    const category = new Category({
        name: req.body.name,
        icon: req.body.icon
    })

    category.save().then((result) => {
        res.send(result)
    }
    ).catch((error) => {
        if (isMongoError(error)) {
            res.status(500).send('Internal server error')
        } else {
            log(error)
            res.status(400).send('Bad Request')
        }
    })
});


/**
* Delete category with id <id>
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

    // Remove all posts from this category
    Posting.deleteMany({"category": id})

    Category.findOneAndDelete({"_id": id}).then((result) => {
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

