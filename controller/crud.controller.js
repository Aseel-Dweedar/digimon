"use strict";

const dataModel = require("../models/crudSchema.model");

// create
const createDig = (req, res) => {
    const { name, img, level } = req.body;
    dataModel.findOne({ name: name }, (error, data) => {
        if (error) {
            res.send(error.message);
        } else if (data) {
            res.send("already added");
        } else {
            const newData = new dataModel({
                name: name,
                img: img,
                level: level,
            });
            newData.save();
            res.send(newData);
        }
    });
};

// get
const getDig = (req, res) => {
    dataModel.find({}, (error, data) => {
        if (error) {
            res.send(error.message);
        } else {
            res.send(data);
        }
    });
};
// delete
const deleteDig = (req, res) => {
    const id = req.params.id;
    dataModel.deleteOne({ _id: id }, (error, data) => {
        if (error) {
            res.send(error.message);
        } else {
            dataModel.find({}, (error, data) => {
                res.send(data);
            });
        }
    });
};
// update
const updateDig = (req, res) => {
    const id = req.params.id;
    const { name, img, level } = req.body;
    dataModel.findOne({ _id: id }, (error, data) => {
        if (error) {
            res.send(error.message);
        } else {
            data.name = name;
            data.img = img;
            data.level = level;
            data.save();
            dataModel.find({}, (error, newData) => {
                res.send(newData);
            });
        }
    });
};

module.exports = { createDig, getDig, deleteDig, updateDig };