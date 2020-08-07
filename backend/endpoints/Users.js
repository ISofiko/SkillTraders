const express = require("express");
const User = require("../models/User");
const { ObjectID } = require('mongodb')
const mongoose = require("mongoose");

const router = express.Router();
const log = console.log

/**
* Get all users
*/
router.get("/", (req, res) => {
    User.find().then((result) => {
        res.send(result);
    }).catch((error) => {
        res.sendStatus(500);
    });
})

module.exports = router;