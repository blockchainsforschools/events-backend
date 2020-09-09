require("express-async-errors");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const jwtValidator = require("./middleware/jwtValidator");
const apolloServer = require("./graphql");
const { COOKIE_SECRET } = require("./constants");

app.set("trust proxy", 1);

app.use(cookieParser(COOKIE_SECRET));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(jwtValidator);

apolloServer.applyMiddleware({ app, cors: false, path: "/graphql" });

app.use("/api", require("./api"));

module.exports = app;
