"use strict";
module.exports = (sequelize, DataTypes) => {
	const eventTags = sequelize.define(
		"eventTags",
		{
			eventId: DataTypes.INTEGER,
			tagId: DataTypes.INTEGER
		},
		{}
	);
	eventTags.associate = function (models) {
		// associations can be defined here
		eventTags.belongsTo(models.tags);
		eventTags.belongsTo(models.events);
	};
	return eventTags;
};
