require('express-async-errors');

const express = require("express");
const app = express();
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const {sequelize} = require("./database/models");
const sessionStore = new SequelizeStore({db: sequelize});
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

app.use(cookieParser(process.env.SESSION_SECRET || "some_secret"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('trust proxy', 1);

app.use(session({
	secret: process.env.SESSION_SECRET || "banana",
	resave: false,
	saveUninitialized: false,
	cookie: {
		path: "/",
		maxAge: (1000 * 86400 * 7),
		httpOnly: true
	},
	rolling: true,
	store: sessionStore
}));

sessionStore.sync();


app.use("/api", require("./api"));

module.exports = app;
