const crypto = require("crypto");

exports.COOKIE_SECRET =
	process.env.COOKIE_SECRET || crypto.randomBytes(32).toString("hex");
