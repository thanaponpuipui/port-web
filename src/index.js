const express = require("express");
const port = require("./configs").env.port;

const app = express();

app.set("view engine", "pug");

app.use(express.static("public"))

app.use(express.json());

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/gallery", (req, res) => {
    res.render("gallery", {test: "this is test data."});
});

app.get("/board", (req, res) => {
    res.render("board", {test: "this is also test data."});
});

app.listen(port, () => {
    console.log("server is runing on port " + port)
});
