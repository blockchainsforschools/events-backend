"use strict";
module.exports = (sequelize, DataTypes) => {
	const Events = sequelize.define(
		"Events",
		{
			name: DataTypes.STRING,
			eventURL: DataTypes.STRING,
			startTime: DataTypes.DATE,
			endTime: DataTypes.DATE,
			imgURL: DataTypes.STRING
		},
		{}
	);
	Events.associate = function (models) {
		// associations can be defined here

		Events.belongsToMany(models.Locations, {
			through: models.EventLocations,
			foreignKey: "eventID"
		});

		Events.hasMany(models.Tags, { foreignKey: "eventID" });
	};
	return Events;
};
