const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const apiData = require("./controller/api.controller");
const { createDig, getDig, deleteDig, updateDig } = require("./controller/crud.controller");

mongoose.connect("mongodb://localhost:27017/dig", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const app = express();
PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/dig", apiData);

app.post("/dig/fav", createDig);
app.get("/dig/fav", getDig);
app.delete("/dig/fav/:id", deleteDig);
app.put("/dig/fav/:id", updateDig);

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});