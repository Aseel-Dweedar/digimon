"use strict";

const axios = require("axios");

const apiData = (req, res) => {
    axios
        .get("https://digimon-api.vercel.app/api/digimon")
        .then((axiosRes) => {
            res.send(axiosRes.data);
        })
        .catch((error) => {
            res.send(error.message);
        });
};

module.exports = apiData;