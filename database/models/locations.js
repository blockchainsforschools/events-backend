"use strict";
module.exports = (sequelize, DataTypes) => {
	const Locations = sequelize.define(
		"Locations",
		{
			name: DataTypes.STRING,
			streetaddress: DataTypes.STRING,
			zipcode: DataTypes.INTEGER,
			city: DataTypes.STRING,
			state: DataTypes.STRING
		},
		{}
	);
	Locations.associate = function (models) {
		// associations can be defined here
		Locations.belongsToMany(models.Events, {
			through: models.EventLocations,
			foreignKey: "locationID"
		});
	};
	return Locations;
};
