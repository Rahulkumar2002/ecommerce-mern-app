const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = process.env.PORT || "8800";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Successfully Connected to MongoDB")
    })
    .catch((err) => {
        console.log("This error is coming when we try to connect with MongoDB : \n" + err);
    });

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.get("/", (req, res) => {
    res.send("This app is working yay");
});

app.listen(port, () => {
    console.log("App is listening at localhost:" + port);
});