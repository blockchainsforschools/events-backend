"use strict";
module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define(
		"Users",
		{
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			emailVerified: DataTypes.BOOLEAN,
			adminPrivileges: DataTypes.INTEGER
		},
		{}
	);
	Users.associate = function (models) {
		// associations can be defined here
	};
	return Users;
};
