const express = require("express");
const app = express();
const http = require("http");

app.get("/", (req, res) => res.send("Welcome to my website!"));

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});