const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const db = require("./models");

app.use("/api", require("./api"));

app.listen(port, () => {
	console.log(`Listening on ${port}`);
});
