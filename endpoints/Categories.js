const express = require("express");
const Category = require("../models/Category");
const { ObjectID } = require('mongodb')
const mongoose = require("mongoose");

const router = express.Router();
const log = console.log

/**
* Get all categories
*/
router.get("/", (req, res) => {
    Category.find().then((result) => {
        res.send(result);
    }).catch((error) => {
        res.sendStatus(500);
    });
})

module.exports = router;