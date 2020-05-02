"use strict";
const bcrypt = require("bcrypt");

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Users",
			[
				{
					firstName: "Admin",
					lastName: "User",
					email: "admin@bfs.org",
					password: bcrypt.hashSync("password", 12).toString(),
					emailVerified: true,
					adminPrivileges: 2,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					firstName: "John",
					lastName: "Doe",
					email: "user@gmail.com",
					password: bcrypt.hashSync("password", 12).toString(),
					emailVerified: true,
					adminPrivileges: 0,
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Users", {
			email: { [Sequelize.Op.in]: ["admin@bfs.org", "user@gmail.com"] }
		});
	}
};
