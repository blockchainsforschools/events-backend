"use strict";
module.exports = (sequelize, DataTypes) => {
	const Updates = sequelize.define(
		"Updates",
		{
			userID: DataTypes.INTEGER,
			eventID: DataTypes.INTEGER,
			title: DataTypes.STRING,
			content: DataTypes.STRING
		},
		{}
	);
	Updates.associate = function (models) {
    // associations can be defined here
    // an update can belong to only one user
		Updates.belongsTo(models.User, {
			foreignKey: "userID",
			targetKey: "id"
		});

    // an update can only be referenced to its parent event
		Updates.belongsTo(models.Events, {
			foreignKey: "eventID",
			targetKey: "id"
		});
	};
	return Updates;
};
