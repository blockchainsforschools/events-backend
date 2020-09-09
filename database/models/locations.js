"use strict";
module.exports = (sequelize, DataTypes) => {
	const locations = sequelize.define(
		"locations",
		{
			title: DataTypes.STRING,
			description: DataTypes.TEXt,
			address: DataTypes.STRING,
			zip: DataTypes.INTEGER,
			city: DataTypes.STRING,
			state: DataTypes.STRING
		},
		{}
	);
	locations.associate = function (models) {
		locations.belongsToMany(models.events, {
			through: models.eventLocations
		});
	};
	return locations;
};
