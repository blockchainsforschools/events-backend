const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use("/api", require("./api"));

app.listen(port, () => {
	console.log(`Listening on ${port}`);
});

module.exports = app;
