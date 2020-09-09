"use strict";
module.exports = (sequelize, DataTypes) => {
	const updates = sequelize.define(
		"updates",
		{
			submittingUserId: DataTypes.STRING,
			eventId: DataTypes.INTEGER,
			title: DataTypes.STRING,
			content: DataTypes.TEXT,
			showHome: DataTypes.BOOLEAN,
			pinned: DataTypes.BOOLEAN
		},
		{}
	);
	updates.associate = function (models) {
		// associations can be defined here
		updates.belongsTo(models.events);
	};
	return updates;
};
