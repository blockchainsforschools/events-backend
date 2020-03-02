const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const db = require("./models");


app.get("/", (req, res) => {
	res.send("hello");
});

app.use("*", (req, res) => {
	res.send("404 not found");
});

app.listen(port, () => {
	console.log(`Listening on ${port}`);
});
