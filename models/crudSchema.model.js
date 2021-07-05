"use strict";

const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    name: {
        unique: true,
        trim: true,
        type: String,
    },
    img: String,
    level: String,
});

const dataModel = mongoose.model("data", dataSchema);

module.exports = dataModel;