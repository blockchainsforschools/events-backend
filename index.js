const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const session = require("express-session");
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const {sequelize} = require("./database/models");
const sessionStore = new SequelizeStore({db: sequelize});

app.set('trust proxy', 1);

app.use(session({
	secret: "banana",
	resave: false,
	saveUninitialized: false,
	cookie: {
		httpOnly: true
	},
	store: sessionStore
}));

sessionStore.sync();


app.use("/api", require("./api"));

app.listen(port, () => {
	console.log(`Listening on ${port}`);
});

module.exports = app;
