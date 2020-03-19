'use strict';
module.exports = (sequelize, DataTypes) => {
	const EventLocations = sequelize.define('EventLocations', {
		eventID: DataTypes.INTEGER,
		locationID: DataTypes.INTEGER
	}, {});
	EventLocations.associate = function (models) {

		// associations can be defined here
		EventLocations.belongsTo(models.Events, {foreignKey: "eventID", targetKey: "id"});
		EventLocations.belongsTo(models.Locations, {foreignKey: "locationID", targetKey: "id"});

	};
	return EventLocations;
};
