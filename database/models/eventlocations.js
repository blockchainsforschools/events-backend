"use strict";
module.exports = (sequelize, DataTypes) => {
	const eventLocations = sequelize.define(
		"eventLocations",
		{
			eventId: DataTypes.INTEGER,
			locationId: DataTypes.INTEGER
		},
		{}
	);
	eventLocations.associate = function (models) {
		// associations can be defined here
		eventLocations.belongsTo(models.locations);
		eventLocations.belongsTo(models.events);
	};
	return eventLocations;
};
