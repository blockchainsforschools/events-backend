const path = require("path");

module.exports = {
	development: {
		url:
			process.env.SEQUELIZE_URL ||
			`sqlite::${path.resolve(__dirname, "./../app.db")}`,
		define: {
			charset: "utf8",
			collate: "utf8_general_ci"
		},
		native: true,
		ssl: true
	},
	production: {
		url: process.env.SEQUELIZE_URL,
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000
		},
		define: {
			charset: "utf8",
			collate: "utf8_unicode_ci"
		},
		native: true,
		ssl: true,
		logging: false
	}
};
