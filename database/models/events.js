"use strict";
module.exports = (sequelize, DataTypes) => {
	const events = sequelize.define(
		"events",
		{
			name: DataTypes.STRING,
			url: DataTypes.STRING,
			description: DataTypes.TEXT,
			start: DataTypes.DATE,
			end: DataTypes.DATE
		},
		{}
	);
	events.associate = function (models) {
		// associations can be defined here
		events.belongsToMany(models.locations, {
			through: models.eventLocations
		});
		events.belongsToMany(models.tags, { through: models.eventTags });
		events.belongsToMany(models.images, { through: models.eventImages });
	};
	return events;
};
